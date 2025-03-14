package com.x.program.center.core.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.x.base.core.entity.JpaObject;
import com.x.base.core.entity.SliceJpaObject;
import com.x.base.core.entity.annotation.CheckPersist;
import com.x.base.core.entity.annotation.ContainerEntity;
import com.x.base.core.project.annotation.FieldDescribe;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(name = "Captcha", description = "服务管理图片验证码.")
@Entity
@ContainerEntity(dumpSize = 1000, type = ContainerEntity.Type.content, reference = ContainerEntity.Reference.strong)
@Table(name = PersistenceProperties.Captcha.table, uniqueConstraints = {
		@UniqueConstraint(name = PersistenceProperties.Captcha.table + JpaObject.IndexNameMiddle
				+ JpaObject.DefaultUniqueConstraintSuffix, columnNames = { JpaObject.IDCOLUMN,
						JpaObject.CREATETIMECOLUMN, JpaObject.UPDATETIMECOLUMN, JpaObject.SEQUENCECOLUMN }) })
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Captcha extends SliceJpaObject {

	private static final long serialVersionUID = -7520516033901189347L;

	private static final String TABLE = PersistenceProperties.Captcha.table;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	@FieldDescribe("数据库主键,自动生成.")
	@Id
	@Column(length = length_id, name = ColumnNamePrefix + id_FIELDNAME)
	private String id = createId();

	/* 以上为 JpaObject 默认字段 */

	public void onPersist() throws Exception {

	}

	/* 更新运行方法 */

	public static final String answer_FIELDNAME = "answer";
	@FieldDescribe("图片密码值.")
	@Column(length = JpaObject.length_16B, name = ColumnNamePrefix + answer_FIELDNAME)
	@CheckPersist(allowEmpty = false)
	private String answer;

	public static final String meta_FIELDNAME = "meta";
	@FieldDescribe("关联的内容,还不知道干啥")
	@Column(length = JpaObject.length_255B, name = ColumnNamePrefix + meta_FIELDNAME)
	@CheckPersist(allowEmpty = true)
	private String meta;

	// public static String[] FLAGS = new String[] { "id" };

	public String getMeta() {
		return meta;
	}

	public void setMeta(String meta) {
		this.meta = meta;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

}