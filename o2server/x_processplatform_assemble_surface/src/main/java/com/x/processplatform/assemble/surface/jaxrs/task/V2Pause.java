package com.x.processplatform.assemble.surface.jaxrs.task;

import org.apache.commons.lang3.BooleanUtils;

import com.x.base.core.container.EntityManagerContainer;
import com.x.base.core.container.factory.EntityManagerContainerFactory;
import com.x.base.core.project.Applications;
import com.x.base.core.project.x_processplatform_service_processing;
import com.x.base.core.project.exception.ExceptionAccessDenied;
import com.x.base.core.project.exception.ExceptionEntityNotExist;
import com.x.base.core.project.http.ActionResult;
import com.x.base.core.project.http.EffectivePerson;
import com.x.base.core.project.jaxrs.WrapBoolean;
import com.x.base.core.project.logger.Logger;
import com.x.base.core.project.logger.LoggerFactory;
import com.x.processplatform.assemble.surface.Business;
import com.x.processplatform.assemble.surface.Control;
import com.x.processplatform.assemble.surface.JobControlBuilder;
import com.x.processplatform.assemble.surface.ThisApplication;
import com.x.processplatform.core.entity.content.Task;
import com.x.processplatform.core.entity.element.Manual;
import com.x.processplatform.core.express.service.processing.jaxrs.task.V2PauseWo;

import io.swagger.v3.oas.annotations.media.Schema;

class V2Pause extends BaseAction {

	private static final Logger LOGGER = LoggerFactory.getLogger(V2Pause.class);

	ActionResult<Wo> execute(EffectivePerson effectivePerson, String id) throws Exception {
		ActionResult<Wo> result = new ActionResult<>();
		String job = null;
		LOGGER.debug("execute:{}, id:{}.", effectivePerson::getDistinguishedName, () -> id);
		try (EntityManagerContainer emc = EntityManagerContainerFactory.instance().create()) {
			Business business = new Business(emc);
			Task task = emc.find(id, Task.class);
			if (null == task) {
				throw new ExceptionEntityNotExist(id, Task.class);
			}
			Control control = new JobControlBuilder(effectivePerson, business, task.getJob()).enableAllowVisit()
					.build();
			if (BooleanUtils.isNotTrue(control.getAllowVisit())) {
				throw new ExceptionAccessDenied(effectivePerson, task);
			}
			if (BooleanUtils.isTrue(task.getPause())) {
				throw new ExceptionAlreadyPause(task.getId());
			}
			Manual manual = business.manual().pick(task.getActivity());
			if (null == manual) {
				throw new ExceptionEntityNotExist(task.getActivity(), Manual.class);
			}
			if (BooleanUtils.isNotTrue(manual.getAllowPause())) {
				throw new ExceptionNotAllowPause(task.getId());
			}
			job = task.getJob();
		}
		V2PauseWo resp = ThisApplication.context().applications().getQuery(effectivePerson.getDebugger(),
				x_processplatform_service_processing.class, Applications.joinQueryUri("task", "v2", id, "pause"), job)
				.getData(V2PauseWo.class);
		Wo wo = new Wo();
		wo.setValue(resp.getValue());
		result.setData(wo);
		return result;
	}

	@Schema(name = "com.x.processplatform.assemble.surface.jaxrs.task.V2Pause$Wo")
	public static class Wo extends WrapBoolean {

		private static final long serialVersionUID = 4257481488388740879L;

	}

}
