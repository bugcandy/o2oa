package com.x.processplatform.service.processing.jaxrs.data;

import java.util.concurrent.Callable;
import java.util.concurrent.TimeUnit;

import org.apache.commons.lang3.BooleanUtils;

import com.google.gson.JsonElement;
import com.x.base.core.container.EntityManagerContainer;
import com.x.base.core.container.factory.EntityManagerContainerFactory;
import com.x.base.core.project.exception.ExceptionEntityNotExist;
import com.x.base.core.project.executor.ProcessPlatformExecutorFactory;
import com.x.base.core.project.http.ActionResult;
import com.x.base.core.project.http.EffectivePerson;
import com.x.base.core.project.jaxrs.WoId;
import com.x.base.core.project.logger.Logger;
import com.x.base.core.project.logger.LoggerFactory;
import com.x.base.core.project.tools.ListTools;
import com.x.processplatform.core.entity.content.WorkCompleted;
import com.x.processplatform.service.processing.Business;

@Deprecated
class ActionUpdateWithWorkCompletedPath4 extends BaseAction {

	private static final Logger LOGGER = LoggerFactory.getLogger(ActionUpdateWithWorkCompletedPath4.class);

	ActionResult<Wo> execute(EffectivePerson effectivePerson, String id, String path0, String path1, String path2,
			String path3, String path4, JsonElement jsonElement) throws Exception {

		LOGGER.debug("execute:{}, id:{}, path0:{}, path1:{}, path2:{}, path3:{}, path4:{}.",
				effectivePerson::getDistinguishedName, () -> id, () -> path0, () -> path1, () -> path2, () -> path3,
				() -> path4);

		ActionResult<Wo> result = new ActionResult<>();
		Wo wo = new Wo();
		String executorSeed = null;

		try (EntityManagerContainer emc = EntityManagerContainerFactory.instance().create()) {
			WorkCompleted workCompleted = emc.fetch(id, WorkCompleted.class,
					ListTools.toList(WorkCompleted.job_FIELDNAME));
			if (null == workCompleted) {
				throw new ExceptionEntityNotExist(id, WorkCompleted.class);
			}
			executorSeed = workCompleted.getJob();
		}

		Callable<String> callable = new Callable<String>() {
			public String call() throws Exception {
				try (EntityManagerContainer emc = EntityManagerContainerFactory.instance().create()) {
					Business business = new Business(emc);
					WorkCompleted workCompleted = emc.find(id, WorkCompleted.class);
					if (null == workCompleted) {
						throw new ExceptionEntityNotExist(id, WorkCompleted.class);
					}
					if (BooleanUtils.isTrue(workCompleted.getMerged())) {
						throw new ExceptionModifyMerged(workCompleted.getId());
					}
					wo.setId(workCompleted.getId());
					updateData(business, workCompleted, jsonElement, path0, path1, path2, path3, path4);
				}
				return "";
			}
		};

		ProcessPlatformExecutorFactory.get(executorSeed).submit(callable).get(300, TimeUnit.SECONDS);

		result.setData(wo);
		return result;
	}

	public static class Wo extends WoId {

		private static final long serialVersionUID = 3698570373201177669L;

	}

}
