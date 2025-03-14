package com.x.attendance.assemble.control.jaxrs.v2.detail;

import com.google.gson.JsonElement;
import com.x.attendance.assemble.control.Business;
import com.x.attendance.assemble.control.jaxrs.v2.ExceptionEmptyParameter;
import com.x.attendance.assemble.control.jaxrs.v2.detail.model.StatisticWi;
import com.x.attendance.assemble.control.jaxrs.v2.detail.model.StatisticWo;
import com.x.base.core.container.EntityManagerContainer;
import com.x.base.core.container.factory.EntityManagerContainerFactory;
import com.x.base.core.project.http.ActionResult;
import com.x.base.core.project.logger.Logger;
import com.x.base.core.project.logger.LoggerFactory;
import com.x.base.core.project.tools.DateTools;
import org.apache.commons.lang3.StringUtils;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by fancyLou on 2023/3/8.
 * Copyright © 2023 O2. All rights reserved.
 */
public class ActionStatisticWithFilter extends BaseAction {


    private static final Logger LOGGER = LoggerFactory.getLogger(ActionStatisticWithFilter.class);

    ActionResult<List<StatisticWo>> execute(JsonElement jsonElement) throws Exception {
        ActionResult<List<StatisticWo>> result = new ActionResult<>();
        try (EntityManagerContainer emc = EntityManagerContainerFactory.instance().create()) {
            StatisticWi wi = this.convertToWrapIn(jsonElement, StatisticWi.class);
            if (StringUtils.isEmpty(wi.getFilter())) {
                throw new ExceptionEmptyParameter("过滤人员或组织");
            }
            if (StringUtils.isEmpty(wi.getStartDate())) {
                throw new ExceptionEmptyParameter("开始日期");
            }
            if (StringUtils.isEmpty(wi.getEndDate())) {
                throw new ExceptionEmptyParameter("结束日期");
            }

            Date startDate = DateTools.parse(wi.getStartDate(), DateTools.format_yyyyMMdd); // 检查格式
            Date endDate = DateTools.parse(wi.getEndDate(), DateTools.format_yyyyMMdd); // 检查格式
            if (startDate.after(endDate)) {
                throw new ExceptionDateEndBeforeStartError();
            }
//            int different = DateTools.differentDays(startDate, endDate);
//            // 包含前后 所以+1
//            different += 1;
//            if (LOGGER.isDebugEnabled()) {
//                LOGGER.debug("时间天数：" + different);
//            }
            List<String> userList = new ArrayList<>();
            Business business = new Business(emc);
            if (wi.getFilter().endsWith("@U")) { // 组织转化成人员列表 不递归
                List<String> users = business.organization().person().listWithUnitSubDirect(wi.getFilter());
                if (users != null && !users.isEmpty()) {
                    userList.addAll(users);
                }
            } else if (wi.getFilter().endsWith("@P")) {
                userList.add(wi.getFilter());
            }
            if (userList.isEmpty()) {
                throw new ExceptionEmptyParameter("过滤人员或组织");
            }
            // 根据人员循环查询 并统计数据
            List<StatisticWo> wos = new ArrayList<>();
            statisticDetail(wi, userList, business, wos);
            result.setData(wos);
            return result;
        }
    }


}
