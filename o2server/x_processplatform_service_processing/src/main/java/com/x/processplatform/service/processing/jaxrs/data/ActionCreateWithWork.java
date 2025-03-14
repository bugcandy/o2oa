package com.x.processplatform.service.processing.jaxrs.data;

import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.TimeUnit;

import com.google.gson.JsonElement;
import com.x.base.core.container.EntityManagerContainer;
import com.x.base.core.container.factory.EntityManagerContainerFactory;
import com.x.base.core.entity.dataitem.DataItemConverter;
import com.x.base.core.project.exception.ExceptionEntityNotExist;
import com.x.base.core.project.executor.ProcessPlatformExecutorFactory;
import com.x.base.core.project.http.ActionResult;
import com.x.base.core.project.http.EffectivePerson;
import com.x.base.core.project.jaxrs.WoId;
import com.x.base.core.project.logger.Logger;
import com.x.base.core.project.logger.LoggerFactory;
import com.x.base.core.project.tools.ListTools;
import com.x.processplatform.core.entity.content.Work;
import com.x.processplatform.core.express.service.processing.jaxrs.data.DataWi;
import com.x.processplatform.service.processing.Business;
import com.x.query.core.entity.Item;

class ActionCreateWithWork extends BaseAction {

	private static final Logger LOGGER = LoggerFactory.getLogger(ActionCreateWithWork.class);

	ActionResult<Wo> execute(EffectivePerson effectivePerson, String id, JsonElement jsonElement) throws Exception {
		LOGGER.debug("execute:{}, id:{}.", effectivePerson::getDistinguishedName, () -> id);
		ActionResult<Wo> result = new ActionResult<>();
		Wo wo = new Wo();
		Wi wi = this.convertToWrapIn(jsonElement, Wi.class);
		String executorSeed = null;

		try (EntityManagerContainer emc = EntityManagerContainerFactory.instance().create()) {
			Work work = emc.fetch(id, Work.class, ListTools.toList(Work.job_FIELDNAME));
			if (null == work) {
				throw new ExceptionEntityNotExist(id, Work.class);
			}
			executorSeed = work.getJob();
		}

		Callable<String> callable = () -> {
			try (EntityManagerContainer emc = EntityManagerContainerFactory.instance().create()) {
				Business business = new Business(emc);
				Work work = emc.find(id, Work.class);
				if (null == work) {
					throw new ExceptionEntityNotExist(id, Work.class);
				}
				if (business.item().countWithJobWithPath(work.getJob()) > 0) {
					throw new ExceptionDataAlreadyExist(work.getTitle(), work.getId());
				}

				wo.setId(work.getId());
				DataItemConverter<Item> converter = new DataItemConverter<>(Item.class);
				List<Item> adds = converter.disassemble(wi.getJsonElement());
				emc.beginTransaction(Item.class);
				emc.beginTransaction(Work.class);
				for (Item o : adds) {
					fill(o, work);
					business.entityManagerContainer().persist(o);
				}
				/* 标识数据已经被修改 */
				work.setDataChanged(true);
				emc.commit();

				wi.init(work);
				createDataRecord(business, wi);
			}
			return "";
		};

		ProcessPlatformExecutorFactory.get(executorSeed).submit(callable).get(300, TimeUnit.SECONDS);

		result.setData(wo);
		return result;

	}

	public static class Wi extends DataWi {

		private static final long serialVersionUID = 6768987004644534271L;
	}

	public static class Wo extends WoId {

		private static final long serialVersionUID = 8172878854689551162L;

	}

}
