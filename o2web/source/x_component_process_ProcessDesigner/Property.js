MWF.require("MWF.widget.UUID", null,false);
MWF.require("MWF.widget.JsonTemplate", null, false);
MWF.xApplication.process.ProcessDesigner.Property = new Class({
	Implements: [Options, Events],

	load: function(){
        if (!this.process.options.isView){
            if (this.fireEvent("queryLoad")){
                MWF.getRequestText(this.htmlPath, function(responseText, responseXML){
                    this.htmlString = responseText;
                    this.fireEvent("postLoad");
                }.bind(this));
            }
            this.process.propertyListNode.addEvent("keydown", function(e){e.stopPropagation();});
        }
	},
	editProperty: function(td){
	},
    getHtmlString: function(callback){
        if (!this.htmlString){
            MWF.getRequestText(this.htmlPath, function(responseText, responseXML){
                this.htmlString = responseText;
                if (callback) callback();
            }.bind(this));
        }else{
            if (callback) callback();
        }
    },
    //隐藏高级属性
    hideAdvanced: function(){
	    if (this.process.panel.showAdvanced && !this.process.panel.showAdvanced.checked){
            var advs = this.propertyContent.querySelectorAll("*[data-o2-advanced=\"yes\"]");
            if (advs && advs.length){
                for (var i=0; i<advs.length; i++){
                    advs[i].hide();
                }
            }
        }
    },

	show: function(){
        if (!this.process.options.isView){
            if (!this.propertyContent){
                this.getHtmlString(function(){
                    this.htmlString = o2.bindJson(this.htmlString, {"lp": o2.APPPD.LP.propertyTemplate});
                    this.propertyContent = new Element("div", {"styles": {"overflow": "hidden"}}).inject(this.process.propertyListNode);
                    this.process.panel.propertyTabPage.showTabIm();
                    this.JsonTemplate = new MWF.widget.JsonTemplate(this.data, this.htmlString);
                    this.propertyContent.set("html", this.JsonTemplate.load());

                    this.process.panel.data = this.data;

                    this.setEditNodeEvent();
                    this.setEditNodeStyles(this.propertyContent);
                    this.loadPropertyTab();
                    this.loadFormFieldInput();
                    this.loadPersonInput();
                    this.loadCalendarInput();
                    this.loadScriptInput();
                    this.loadScriptText();
                    this.loadConditionInput();
                    this.loadFormSelect();
                    this.loadSerial();
                    this.loadArrayList();
                    this.loadDataTraceFieldSelect();
                    this.loadSericalActivitySelect();
                    this.loadApplicationSelector();
                    this.loadProcessSelector();
                    this.loadIconSelect();
                    this.loadContextRoot();
                    this.loadProjection();
                    this.loadMaplist();
                    this.loadQueryTablePublisher();
                    this.loadGobackActivityConfig();

                    this.hideAdvanced();
                }.bind(this));
                //this.loadDutySelector();
            }else{
                this.process.panel.data = this.data;
                this.propertyContent.setStyle("display", "block");
                this.process.panel.propertyTabPage.showTabIm();
            }


        //    this.process.isFocus = true;
        }
	},
    //hide: function(){
    //    if (!this.process.options.isView) {
    //        this.JsonTemplate = null;
    //
    //        this.scriptTexts.each(function(script){
    //            MWF.release(script);
    //        }.bind(this));
    //        this.scriptTexts = null;
    //
    //        this.propertyContent.set("html", "");
    //    }
    //},
    hide: function(){
        if (!this.process.options.isView) {
            if (this.propertyContent) this.propertyContent.setStyle("display", "none");
        }
    },
	
	loadPropertyTab: function(){
		var tabNodes = this.propertyContent.getElements(".MWFTab");
		if (tabNodes.length){
			var tmpNode = this.propertyContent.getFirst();
			var tabAreaNode = new Element("div", {
				"styles": this.process.css.propertyTabNode
			}).inject(tmpNode, "before");

			MWF.require("MWF.widget.Tab", function(){
				var tab = new MWF.widget.Tab(tabAreaNode, {"style": "moduleList"});
				tab.load();
				var tabPages = [];
				tabNodes.each(function(node){
					var tabPage = tab.addTab(node, node.get("title"), false);
					tabPages.push(tabPage);
					if (node.hasAttribute("data-o2-advanced") && node.dataset["o2Advanced"]=="yes"){
                        tabPage.tabNode.setAttribute("data-o2-advanced", "yes");
                    }
				}.bind(this));
				tabPages[0].showTab();
			}.bind(this));
		}
	},
	
	setEditNodeEvent: function(){
		var property = this;
	//	var inputs = this.propertyContent.getElements(".editTableInput");
		var inputs = this.propertyContent.getElements("input");
		inputs.each(function(input){
			
			var jsondata = input.get("name");

            var id = this.process.process.id;
            if (this.activity) id = this.activity.data.id;
            if (this.route) id = this.route.data.id;

			if (jsondata){
				var inputType = input.get("type").toLowerCase();
				switch (inputType){
					case "radio":
                        input.set("name", id+jsondata);
						input.addEvent("change", function(e){
							property.setRadioValue(jsondata, this);
						});
						input.addEvent("blur", function(e){
							property.setRadioValue(jsondata, this);
						});
                        input.addEvent("keydown", function(e){
                            e.stopPropagation();
                        });
                        property.setRadioValue(jsondata, input);
						break;
					case "checkbox":
                        input.set("name", id+jsondata);
                        input.addEvent("keydown", function(e){
                            e.stopPropagation();
                        });

						break;
					default:
						input.addEvent("change", function(e){
							property.setValue(jsondata, this.value);
						});
						input.addEvent("blur", function(e){
							property.setValue(jsondata, this.value);
						});
						input.addEvent("keydown", function(e){
							if (e.code===13){
								property.setValue(jsondata, this.value);
							}
                            e.stopPropagation();
						});
                        property.setValue(jsondata, input.get("value"));
				}
			}
		}.bind(this));

        var selects = this.propertyContent.getElements("select");
        selects.each(function(select){
            var jsondata = select.get("name");
            if (jsondata){
                select.addEvent("change", function(e){
                    property.setSelectValue(jsondata, this);
                });
                //property.setSelectValue(jsondata, select);
            }
        });
		
		var textareas = this.propertyContent.getElements("textarea");
		textareas.each(function(input){
			var jsondata = input.get("name");
			if (jsondata){
				input.addEvent("change", function(e){
					property.setValue(jsondata, this.value);
				});
				input.addEvent("blur", function(e){
					property.setValue(jsondata, this.value);
				});
                input.addEvent("keydown", function(e){
                    e.stopPropagation();
                });
			}
		}.bind(this));
		
	},
    setSelectValue: function(name, select){
        var idx = select.selectedIndex;
        var options = select.getElements("option");
        var value = "";
        if (options[idx]){
            value = options[idx].get("value");
        }
        this.data[name] = value;
    },
	setRadioValue: function(name, input){
		if (input.checked){
            // var oldValue = this.data[name];
			var value = input.value;
			if (value=="false") value = false;
			if (value=="true") value = true;

            if (input.dataset.valueType && input.dataset.valueType==='number'){
                value = parseFloat(value);
            }

            var names = name.split(".");
            var oldValue = null;
            var o = this.data;

            while (names.length>1){
                var k = names.shift();
                if (!o.hasOwnProperty(k)){
                    o[k] = {};
                }
                o=o[k];
            }
            var key = names.shift();
            oldValue = o[key];
            o[key] = value;

			// this.data[name] = value;

            if (this.route) this.route._setEditProperty(name, input, oldValue);
		}
	},
	setValue: function(name, value){
        // var oldValue = this.data[name];
		// this.data[name] = value;
        var names = name.split(".");
        var oldValue = null;
        var o = this.data;

        while (names.length>1){
            var k = names.shift();
            if (!o.hasOwnProperty(k)){
                o[k] = {};
            }
            o=o[k];
        }
        var key = names.shift();
        oldValue = o[key];
        o[key] = value;

		if (name=="name"){
			if (!value) this.data[name] = MWF.APPPD.LP.unnamed;
		//	this.activity.redraw();
		}
        if (this.route) this.route._setEditProperty(name, input, oldValue);
	},
	setEditNodeStyles: function(node){
		var nodes = node.getChildren();
		if (nodes.length){
			nodes.each(function(el){
				var cName = el.get("class");
				if (cName){
					if (this.process.css[cName]) el.setStyles(this.process.css[cName]);
				}
				this.setEditNodeStyles(el);
			}.bind(this));
		}
	},
    loadScriptText: function(){
        this.scriptTexts = [];
        var scriptNodes = this.propertyContent.getElements(".MWFScriptText");
        MWF.xDesktop.requireApp("process.ProcessDesigner", "widget.ScriptText", function(){
            var _self = this;
            scriptNodes.each(function(node){
                var api = node.dataset["o2Api"];
                var editorType = node.dataset["editorType"];
                var loadImmediately = node.dataset["loadImmediately"];
                var script = new MWF.xApplication.process.ProcessDesigner.widget.ScriptText(node, this.data[node.get("name")], this.process.designer, {
                    "api": api,
                    "forceType": editorType || null,
                    "maskNode": this.process.designer.content,
                    "maxObj": this.process.designer.paperNode,
                    "onChange": function(code){
                        _self.data[node.get("name")] = code;
                    },
                    "type": node.dataset["type"]
                });
                if( loadImmediately )script.loadEditor();
                this.scriptTexts.push(script);
                //this.setScriptItems(script, node);
                node.store("editor", script);
            }.bind(this));
        }.bind(this));
    },
	loadScriptInput: function(){
		var scriptNodes = this.propertyContent.getElements(".MWFScript");
        MWF.xDesktop.requireApp("process.ProcessDesigner", "widget.ScriptSelector", function(){
            var _self = this;
            scriptNodes.each(function(node){
                var script = new MWF.xApplication.process.ProcessDesigner.widget.ScriptSelector(node, this.data[node.get("name")], this.process.designer, {
                    "maskNode": this.process.designer.content,
                    "onSelected": function(scriptData){
                        _self.data[node.get("name")] = scriptData.name;
                    },
                    "onDelete": function(){
                        _self.data[node.get("name")] = "";
                        node.empty();
                    }
                    //"onPostSave": function(script){
                    //    this.saveScriptItem(node, script);
                    //}.bind(this),
                    //"onQueryDelete": function(script){
                    //    this.deleteScriptItem(node, script);
                    //}.bind(this)
                });
                //this.setScriptItems(script, node);

                node.store("selector", script);
            }.bind(this));
        }.bind(this));
	},

    loadScriptArea: function(){
        var scriptAreas = this.propertyContent.getElements(".MWFScriptArea");
        var formulaAreas = this.propertyContent.getElements(".MWFFormulaArea");
        this.loadScriptEditor(scriptAreas);
        this.loadScriptEditor(formulaAreas, "formula");
    },
    loadScriptEditor: function(scriptAreas, style){
        scriptAreas.each(function(node){
            var title = node.get("title");
            var name = node.get("name");
            if (!this.data[name]) this.data[name] = {"code": "", "html": ""};
            var scriptContent = this.data[name];

            MWF.require("MWF.widget.ScriptArea", function(){
                var scriptArea = new MWF.widget.ScriptArea(node, {
                    "title": title,
                    //"maxObj": this.propertyNode.parentElement.parentElement.parentElement,
                    "maxObj": this.process.designer.content,
                    "onChange": function(){
                        if (!this.data[name]){
                            this.data[name] = {"code": "", "html": ""};
                            //if (this.module.form.scriptDesigner) this.module.form.scriptDesigner.addScriptItem(this.data[name], "code", this.data, name);
                        }
                        var json = scriptArea.toJson();
                        this.data[name].code = json.code;
                    }.bind(this),
                    //"onSave": function(){
                    //    this.designer.saveForm();
                    //}.bind(this),
                    "style": style || "default"
                });
                scriptArea.load(scriptContent);
            }.bind(this));

        }.bind(this));
    },

    loadUnitTypeSelector: function(){
        var nodes = this.propertyContent.getElements(".MWFFormUnitTypeSelector");
        if (nodes.length){
            this.getUnitTypeList(function(){
                nodes.each(function(node){
                    var select = new Element("select").inject(node);
                    select.addEvent("change", function(e){
                        this.setValue(e.target.getParent("div").get("name"), e.target.options[e.target.selectedIndex].value);
                    }.bind(this));
                    this.setUnitTypeSelectOptions(node, select);
                    this.setValue(select.getParent("div").get("name"), select.options[select.selectedIndex].value);
                    // var refreshNode = new Element("div", {"styles": this.form.css.propertyRefreshFormNode}).inject(node);
                    // refreshNode.addEvent("click", function(e){
                    //     this.getUnitTypeList(function(){
                    //         this.setUnitTypeSelectOptions(node, select);
                    //     }.bind(this), true);
                    // }.bind(this));

                }.bind(this));
            }.bind(this));
        }
    },
    setUnitTypeSelectOptions: function(node, select){
        var name = node.get("name");
        select.empty();
        var option = new Element("option", {"value":"all", "text": MWF.xApplication.process.ProcessDesigner.LP.all, "selected": (!this.data[name] || this.data[name]==="all")}).inject(select);
        this.unitTypeList.each(function(unitType){
            var option = new Element("option", {
                "text": unitType,
                "value": unitType,
                "selected": (this.data[name]===unitType)
            }).inject(select);
        }.bind(this));
    },
    getUnitTypeList: function(callback, refresh){
        if (!this.unitTypeList || refresh){
            //MWF.xDesktop.requireApp("Org", "Actions.RestActions", function(){
            //    var action = new MWF.xApplication.Org.Actions.RestActions();
            var action = MWF.Actions.get("x_organization_assemble_control");
            action.listUnitType(function(json){
                this.unitTypeList = json.data.valueList;
                if (callback) callback();
            }.bind(this));
            //}.bind(this));
        }else{
            if (callback) callback();
        }
    },

    loadFormFieldInput: function(){
        var fieldNodes = this.propertyContent.getElements(".MWFFormFieldPerson");
        MWF.xDesktop.requireApp("process.ProcessDesigner", "widget.PersonSelector", function(){
            fieldNodes.each(function(node){
                var dataType = node.get("data-o2-type");
                var data = this.data[node.get("name")];
                if( dataType && dataType === "string" && o2.typeOf(data) === "string")data = data.split(",");
                new MWF.xApplication.process.ProcessDesigner.widget.PersonSelector(node, this.process.designer, {
                    "type": "formField",
                    "application": this.process.process.application,
                    "fieldType": "person",
                    "names": data || [],
                    "onChange": function(ids){this.savePersonItem(node, ids, dataType);}.bind(this)
                });
            }.bind(this));
        }.bind(this));
    },
    createCalendar: function(node){
        if (!node.retrieve("calendar")){
            var calendar = new MWF.widget.Calendar(node, {
                "isTime": true,
                // "target": node.getParent(),
                "style": "xform",
                "secondEnable": true,
                "format": "db",
                "onChange": function(dv, date, t){
                    this.setValue(node.get("name"), dv)
                }.bind(this)
            });
            node.store("calendar", calendar);
        }
    },
    loadCalendarInput: function(){
        var nodes = this.propertyContent.getElements(".MWFDateTime");
        MWF.require("MWF.widget.Calendar", function(){
            nodes.each(function(node){
                var input = node.getFirst();
                input.addEvents({
                    "click": function(){ this.createCalendar(input) }.bind(this),
                    "focus": function(){ this.createCalendar(input) }.bind(this)
                });
            }.bind(this));
        }.bind(this));
    },
    loadDataTraceFieldSelect: function(){
        var buttonList = this.propertyContent.getElements(".MWFDataTraceFieldSelect");
        var lp = this.process.designer.lp.propertyTemplate;
        buttonList.each(function(node){
            node.addEventListener("click", function(){
                var arrayListNode = node.getNext();
                var arrayList = arrayListNode.arrayList;
                var selectedFields = arrayList.toArray();

                var content = new Element('div.o2_vue', {
                    "styles": this.process.css.selectDataTraceFieldArea
                });
                const formArea = new Element('div', {"styles": this.process.css.selectDataTraceArea}).inject(content);
                new Element('div', {"styles": this.process.css.selectDataTraceAreaTitle, text: lp.selectForm}).inject(formArea);
                const formContent = new Element('div', {"styles": this.process.css.selectDataTraceAreaContent}).inject(formArea);

                const fieldArea = new Element('div', {"styles": this.process.css.selectDataTraceArea}).inject(content);
                new Element('div', {"styles": this.process.css.selectDataTraceAreaTitle, text: lp.selectField}).inject(fieldArea);
                const fieldContent = new Element('div', {"styles": this.process.css.selectDataTraceAreaContent}).inject(fieldArea);

                const selectedArea = new Element('div', {"styles": this.process.css.selectDataTraceArea}).inject(content);
                new Element('div', {"styles": this.process.css.selectDataTraceAreaTitle, text: lp.selectedField}).inject(selectedArea);
                const selectedContent = new Element('div', {"styles": this.process.css.selectDataTraceAreaContent}).inject(selectedArea);
                if (!selectedContent.selectedFields) selectedContent.selectedFields = {};

                selectedFields.forEach(function(name){
                    this.createSelectedItem(name, selectedContent);
                }.bind(this));

                content.style.boxSizing = 'border-box!important';
                var _self = this;
                o2.Actions.load("x_processplatform_assemble_designer").FormAction.listWithApplication(this.process.process.application, function(json){
                    json.data.forEach(function(form){
                        var item = new Element("div", {
                            "text": form.name,
                            "styles": _self.process.css.selectFormItemNode
                        }).inject(formContent);
                        item.store('formId', form.id);
                        item.addEvents({
                            "mouseover": function(e){e.target.addClass('lightColor_bg');},
                            "mouseout": function(e){e.target.removeClass('lightColor_bg');},
                            "click": function(e){ _self.selectedForm(e.target, fieldContent, selectedContent); }
                        });
                    });
                });
                o2.DL.open({
                    title: lp.dataTraceFieldNamesSelect,
                    width: 700,
                    height: 500,
                    content: content,
                    buttonList: [
                        {
                            text: "确定",
                            action: function(){
                                _self.selectFieldsOk(selectedContent, arrayList);
                                this.close();
                            }
                        },
                        {
                            text: "关闭",
                            type: "cancel",
                            action: function(){
                                this.close();
                            }
                        }
                    ]
                });
            }.bind(this));

        }.bind(this));
    },
    selectFieldsOk: function(selectedContent, arrayList){
        var fields = Object.keys(selectedContent.selectedFields);
        arrayList.clear();
        arrayList.loadContent(fields);
        arrayList.fireEvent("change");
    },
    selectedForm: function(node, fieldContent, selectedContent){
        if (fieldContent.formNode){
            fieldContent.formNode.removeClass('mainColor_bg');
        }
        node.addClass('mainColor_bg');
        node.removeClass('lightColor_bg');
        fieldContent.formNode = node;

        var _self = this;
        var id = node.retrieve("formId");
        o2.Actions.load("x_processplatform_assemble_designer").FormAction.get(id, function(form){
            var fields = this.getFormFields(form.data.data);
            var mobileFields = this.getFormFields(form.data.mobileData);
            fields.forEach(function(name){
                _self.createFieldItem(name, fieldContent, selectedContent);
            });
            mobileFields.forEach(function(name){
                if (fields.indexOf(name)===-1){
                    _self.createFieldItem(name, fieldContent, selectedContent);
                }
            });
        }.bind(this));
    },
    createFieldItem: function(name, fieldContent, selectedContent){
        var item = new Element("label", {
            "html": "<input type='checkbox' value='"+name+"'><div>"+name+"</div>",
            "styles": this.process.css.selectFieldItemNode
        }).inject(fieldContent);

        if (selectedContent.selectedFields[name]){
            item.getElement('input').checked = true;
        }

        var _self = this;
        item.addEvents({
            "mouseover": function(e){if (!item.firstElementChild.checked) item.addClass('lightColor_bg');},
            "mouseout": function(e){if (!item.firstElementChild.checked) item.removeClass('lightColor_bg');}
        });
        item.firstElementChild.addEventListener('click', function(e){ e.stopPropagation(); _self.clickField(e.target, selectedContent); });
    },
    clickField: function(input, selectedContent){
        var checked = input.checked;
        var name = input.value;
        var node = input.parentElement;
        if (checked){
            node.addClass('mainColor_bg');
            node.removeClass('lightColor_bg');

            this.createSelectedItem(name, selectedContent);
        }else{
            node.removeClass('mainColor_bg');
            var item = selectedContent.selectedFields[name];
            item.destroy();
            selectedContent.selectedFields[name] = null;
        }
    },
    createSelectedItem: function(name, node){
        var flag = !node.selectedFields[name];
        if (flag){
            var item = new Element("div", {
                "html": name,
                "styles": this.process.css.selectFormItemNode
            }).inject(node);
            node.selectedFields[name] = item;
        }
    },
    getFormFields: function(data){
        if (data){
            var fieldTypeList = ["textfield", "textarea", "select", "radio", "personfield",
                "orgfield", "org", "number", "eltime", "elswitch", "elslider", "elselect", "elrate",
                "elradio", "elnumber", "elinput", "eldatetime", "eldate", "elcolorpicker", "elcheckbox",
                "elcascader", "elautocomplete", "combox", "checkbox", "calendar", "address"];

            var formData = JSON.decode(MWF.decodeJsonString(data));
            var json = formData.json;
            return Object.keys(json.moduleList).filter(function(k){
                var m = json.moduleList[k]
                return (fieldTypeList.indexOf(m.type.toLowerCase())!==-1 || fieldTypeList.indexOf(m.moduleName)!==-1);
            })
            //     .map(function(k){
            //     return {
            //         name: k,
            //         type: json.moduleList[k].type,
            //     }
            // });
        }
        return [];
    },

    saveGobackConfig: function(check, select, defineConfigList){
        var activityId = check.value;
        var config = defineConfigList.find(function(c){
            return c.activity === activityId;
        });

        if (check.checked){
            var way = select.options[select.selectedIndex].value;
            if (config){
                config.way = way;
            }else{
                defineConfigList.push({
                    activity: activityId,
                    way: way
                });
            }
        }else {
            if (config) {
                defineConfigList.erase(config);
            }
        }
    },
    loadGobackActivityConfig: function(){
        var nodes = this.propertyContent.getElements(".gobackActivityConfig");
        // this.manuals
        nodes.each(function(node){
            var keys = Object.keys(this.process.manuals);
            if (keys.length){
                var html = '<table cellspacing="0" cellpadding="5px" style="width: 100%; border: 1px solid #cccccc; border-collapse: collapse"><tr>' +
                    // '<th class="grayColor_bg" style="width: 20px; max-width: 20px; border: 1px solid #cccccc;"></th>' +
                    '<th class="grayColor_bg" style="text-align:left; border: 1px solid #cccccc;">活动</th>' +
                    '<th class="grayColor_bg" style="text-align:left; border: 1px solid #cccccc;">退回后处理方式</th>' +
                    '</tr></table>';
                node.insertAdjacentHTML('beforeend', html);
                var table = node.getElement('table');

                if (!this.data.goBackConfig) this.data.goBackConfig = {};
                if (!this.data.goBackConfig.defineConfigList) this.data.goBackConfig.defineConfigList = [];
                var defineConfigList = this.data.goBackConfig.defineConfigList;

                keys.forEach(function(key){
                    var activity = this.process.manuals[key];
                    if (activity.data.id !== this.data.id){
                        var config = defineConfigList.find(function(c){
                            return c.activity === activity.data.id;
                        });
                        var tr = table.insertRow();
                        var td = tr.insertCell();
                        td.setStyles({
                            "border": "1px solid #cccccc"
                        });

                        var label = new Element('label').inject(td);
                        var check = new Element('input',{
                            type: 'checkbox',
                            value: activity.data.id,
                            checked: !!config
                        }).inject(label);
                        label.appendChild(document.createTextNode(activity.data.name));
                        check.addEvent('click', function(e){
                            var select = e.target.getParent('tr').getElement('select');
                            this.saveGobackConfig(e.target, select, defineConfigList);
                        }.bind(this));

                        td = tr.insertCell();
                        td.setStyles({
                            "border": "1px solid #cccccc"
                        });
                        var select = new Element('select', {
                            html: '<option '+(!config || config.way==='default' ? 'selected' : '')+' value="default" select>'+o2.APPPD.LP.propertyTemplate.backWayDefault+'</option>' +
                                '<option '+(config && config.way==='step' ? 'selected' : '')+' value="step" select>'+o2.APPPD.LP.propertyTemplate.backWayStep+'</option>' +
                                '<option '+(config && config.way==='jump' ? 'selected' : '')+' value="jump">'+o2.APPPD.LP.propertyTemplate.backWayJump+'</option>' +
                                '<option '+(config && config.way==='custom' ? 'selected' : '')+' value="custom">'+o2.APPPD.LP.propertyTemplate.backWayCustom+'</option>'
                        }).inject(td);
                        select.addEvent('click', function(e){
                            var check = e.target.getParent('tr').getElement('input');
                            this.saveGobackConfig(check, e.target, defineConfigList);
                        }.bind(this));

                    }
                }.bind(this));
            }


            // var title = node.get("title");
            // var name = node.get("name");
            // var lName = name.toLowerCase();
            // var collapse = node.get("collapse");
            // var mapObj = this.data[name] || {};
            // //if (!mapObj) mapObj = {};
            // MWF.require("MWF.widget.Maplist", function(){
            //     node.empty();
            //     var maplist = new MWF.widget.Maplist(node, {
            //         "title": title,
            //         "collapse": (collapse) ? true : false,
            //         "onChange": function(){
            //             //this.data[name] = maplist.toJson();
            //             //
            //             //var oldData = this.data[name];
            //             this.setValue(name, maplist.toJson());
            //             // this.changeStyle(name, oldData);
            //             // this.changeData(name);
            //         }.bind(this),
            //         "isProperty": (lName.contains("properties") || lName.contains("property") || lName.contains("attribute"))
            //     });
            //     maplist.load(mapObj);
            //     //this.maplists[name] = maplist;
            // }.bind(this));
        }.bind(this));
    },

    loadPersonInput: function(){
        var personIdentityNodes = this.propertyContent.getElements(".MWFPersonIdentity");
        var personNodes = this.propertyContent.getElements(".MWFPersonPerson");
        var personUnitNodes = this.propertyContent.getElements(".MWFPersonUnit");
        var personGroupNodes = this.propertyContent.getElements(".MWFPersonGroup");
        var dutyNameNodes = this.propertyContent.getElements(".MWFPersonDuty");
        // var personDepartmentNodes = this.propertyContent.getElements(".MWFPersonDepartment");
        // var personCompanyNodes = this.propertyContent.getElements(".MWFPersonCompany");
        var dutyNodes = this.propertyContent.getElements(".MWFDutySelector");
        var tableNodes = this.propertyContent.getElements(".MWFTableSelector");
        var cmsCategoryNodes = this.propertyContent.getElements(".MWFCMSCategorySelector");
        var formFieldString = this.propertyContent.getElements(".MWFFormFieldString");
        MWF.xDesktop.requireApp("process.ProcessDesigner", "widget.PersonSelector", function(){
            personIdentityNodes.each(function(node){
                var count = node.get("count") || 0;
                new MWF.xApplication.process.ProcessDesigner.widget.PersonSelector(node, this.process.designer, {
                    "type": "identity",
                    "names": this.data[node.get("name")],
                    "count": count,
                    "onChange": function(ids){this.savePersonItem(node, ids);}.bind(this)
                });
            }.bind(this));
            personNodes.each(function(node){
                new MWF.xApplication.process.ProcessDesigner.widget.PersonSelector(node, this.process.designer, {
                    "type": "person",
                    "names": this.data[node.get("name")],
                    "onChange": function(ids){this.savePersonItem(node, ids);}.bind(this)
                });
            }.bind(this));
            personUnitNodes.each(function(node){
                new MWF.xApplication.process.ProcessDesigner.widget.PersonSelector(node, this.process.designer, {
                    "type": "unit",
                    "names": this.data[node.get("name")],
                    "onChange": function(ids){this.savePersonItem(node, ids);}.bind(this)
                });
            }.bind(this));
            personGroupNodes.each(function(node){
                new MWF.xApplication.process.ProcessDesigner.widget.PersonSelector(node, this.process.designer, {
                    "type": "group",
                    "names": this.data[node.get("name")],
                    "onChange": function(ids){this.savePersonItem(node, ids);}.bind(this)
                });
            }.bind(this));
            dutyNodes.each(function(node){
                new MWF.xApplication.process.ProcessDesigner.widget.PersonSelector(node, this.process.designer, {
                    "type": "duty",
                    "names": this.data[node.get("name")],
                    "onChange": function(ids){this.addDutyItem(node, ids);}.bind(this),
                    "onRemoveDuty": function(item){this.removeDutyItem(node, item);}.bind(this)
                });
            }.bind(this));
            dutyNameNodes.each(function(node){
                new MWF.xApplication.process.ProcessDesigner.widget.PersonSelector(node, this.process.designer, {
                    "type": "dutyName",
                    "names": this.data[node.get("name")],
                    "onChange": function(ids){this.savePersonItem(node, ids);}.bind(this)
                });
            }.bind(this));
            tableNodes.each(function(node){
                var resultKey = node.get("data-result-key");
                var selector = new MWF.xApplication.process.ProcessDesigner.widget.PersonSelector(node, this.process.designer, {
                    "type": "queryTable",
                    "count": node.get("count") || 0,
                    "names": this.data[node.get("name")],
                    "onChange": function(ids){this.savePersonItem(node, ids, null, resultKey);}.bind(this)
                });
                node.store("selector", selector);
            }.bind(this));
            cmsCategoryNodes.each(function(node){
                var resultKey = node.get("data-result-key");
                var data;
                if( resultKey ){
                    var d = this.data[node.get("name")] || [];
                    data = ( o2.typeOf( d ) === "array" ? d : [d] ).map(function(i){
                        var obj = {};
                        obj[ resultKey ] = i;
                        return obj;
                    });
                }else{
                    data = this.data[node.get("name")] || [];
                }
                new MWF.xApplication.process.ProcessDesigner.widget.PersonSelector(node, this.process.designer, {
                    "type": "CMSCategory",
                    "count": node.get("count") || 0,
                    "names": data,
                    "onChange": function(ids){this.savePersonItem(node, ids, null, resultKey);}.bind(this)
                });
            }.bind(this));
            formFieldString.each(function(node){
                var count = node.get("count") || 0;
                var dataType = node.get("data-o2-type");
                var data = this.data[node.get("name")];
                if( dataType && dataType === "string" && o2.typeOf(data) === "string")data = data.split(",");
                new MWF.xApplication.process.ProcessDesigner.widget.PersonSelector(node, this.process.designer, {
                    "type": "formField",
                    "count": count,
                    "application": this.process.process.application,
                    "fieldType": "string",
                    "names": data || [],
                    "onChange": function(ids){this.savePersonItem(node, ids, dataType);}.bind(this)
                });
            }.bind(this));

            // personDepartmentNodes.each(function(node){
            //     new MWF.xApplication.process.ProcessDesigner.widget.PersonSelector(node, this.process.designer, {
            //         "type": "department",
            //         "names": this.data[node.get("name")],
            //         "onChange": function(ids){this.savePersonItem(node, ids);}.bind(this)
            //     });
            // }.bind(this));
            // personCompanyNodes.each(function(node){
            //     new MWF.xApplication.process.ProcessDesigner.widget.PersonSelector(node, this.process.designer, {
            //         "type": "company",
            //         "names": this.data[node.get("name")],
            //         "onChange": function(ids){this.savePersonItem(node, ids);}.bind(this)
            //     });
            // }.bind(this));
            // dutyNodes.each(function(node){
            //     new MWF.xApplication.process.ProcessDesigner.widget.PersonSelector(node, this.process.designer, {
            //         "type": "duty",
            //         "names": this.data[node.get("name")],
            //         "onChange": function(ids){this.addDutyItem(node, ids);}.bind(this),
            //         "onRemoveDuty": function(item){this.removeDutyItem(node, item);}.bind(this)
            //     });
            // }.bind(this));
        }.bind(this));
    },
    removeDutyItem: function(node, item){
        if (item.data.id){
            var values = JSON.decode(this.data[node.get("name")]) || [];
            var value = values.filter(function(v){
                return v.id == item.data.id;
            });
            value.each(function(v) {
                values = values.erase(v);
            });
            this.data[node.get("name")] = JSON.encode(values);
        }
        item.node.destroy();
        MWF.release(item);
        delete item;
    },
    addDutyItem: function(node, ids){
        var value = this.data[node.get("name")] || "";
        if (!value) value = "[]";
        var values = JSON.decode(value);
        ids.each(function(id){
            if (id.data.dutyId){
                for (var i=0; i<values.length; i++){
                    if (values[i].dutyId===id.data.dutyId){
                        values[i].name = id.data.name;
                        values[i].code = id.data.code;
                        break;
                    }
                }
            }else{
                id.data.dutyId = new MWF.widget.UUID().toString();
                values.push({"name": id.data.name, "id": id.data.id, "dutyId": id.data.dutyId, "code": id.data.code});
            }
        }.bind(this));
        this.data[node.get("name")] = JSON.encode(values);
    },
    savePersonItem: function(node, ids, dataType, resultKey){
        var count = node.get("count") || 0;
        var values = [];
        ids.each(function(id){
            if( resultKey ){
                values.push( id.data[resultKey] );
            }else{
                values.push(id.data.distinguishedName || id.data.id);
            }
        }.bind(this));

        var data;
        if( count && count.toInt()==1  ){
            data = values[0]
        }else if( dataType === "string" ){
            data = values.join(",");
        }else{
            data = values;
        }

        this.data[node.get("name")] = data;
    },
    savePersonObjectItem: function(node, ids){
        var values = [];
        ids.each(function(id){
            values.push(id.data);
        }.bind(this));
        this.data[node.get("name")] = values;
    },
    loadConditionInput: function(){
        var conditionNodes = this.propertyContent.getElements(".MWFCondition");
        conditionNodes.each(function(node){
            MWF.xDesktop.requireApp("process.ProcessDesigner", "widget.ConditionEditor", function(){
                var script = new MWF.xApplication.process.ProcessDesigner.widget.ConditionEditor(node, {
                    "onPostSave": function(script){
                        this.saveScriptItem(node, script);
                    }.bind(this),
                    "onQueryDelete": function(script){
                        this.deleteScriptItem(node, script);
                    }.bind(this)
                });
                this.setScriptItems(script, node);
            }.bind(this));
        }.bind(this));
    },
    loadFormSelect: function(){
        var formNodes = this.propertyContent.getElements(".MWFFormSelect");
        if (formNodes.length){
            this.getFormList(function(){
                formNodes.each(function(node){
                    var select = new Element("select").inject(node);
                    var option = new Element("option", {"text": "none"}).inject(select);
                    select.addEvent("change", function(e){
                        this.setValue(e.target.getParent("div").get("name"), e.target.options[e.target.selectedIndex].value);
                    }.bind(this));
                    this.setFormSelectOptions(node, select);

                    var refreshNode = new Element("div", {"styles": this.process.css.propertyRefreshFormNode}).inject(node);
                    refreshNode.addEvent("click", function(e){
                        this.getFormList(function(){
                            this.setFormSelectOptions(node, select);
                        }.bind(this), true);
                    }.bind(this));

                    var openNode = new Element("div", {"styles": this.process.css.propertyOpenFormNode}).inject(node);
                    openNode.addEvent("click", function(e){
                        var name = node.get("name");
                        var formId = this.data[name];
                        if( formId && formId !== "none" ){
                            o2.Actions.load("x_processplatform_assemble_designer").FormAction.get(formId, function () {
                                var options = {
                                    "style": layout.desktop.formDesignerStyle || "default",
                                    "appId": "process.FormDesigner"+formId,
                                    "id": formId
                                };
                                layout.openApplication(null, "process.FormDesigner", options);
                            }.bind(this), function () {
                                return true;
                            })
                        }
                    }.bind(this));
                }.bind(this));
            }.bind(this));
        }
    },

    setFormSelectOptions: function(node, select){
        var name = node.get("name");
        select.empty();
        var option = new Element("option", {"text": "none"}).inject(select);
        this.forms.each(function(form){
            var option = new Element("option", {
                "text": form.name,
                "value": form.id,
                "selected": (this.data[name]==form.id)
            }).inject(select);
        }.bind(this));
    },
    getFormList: function(callback, refresh){
        if (!this.forms || refresh){
            this.process.designer.actions.listForm(this.process.designer.application.id, function(json){
                this.forms = json.data;
                if (callback) callback();
            }.bind(this));
        }else{
            if (callback) callback();
        }
    },

    loadArrayList: function(){
        var arrays = this.propertyContent.getElements(".MWFArraylist");
        arrays.each(function(node){
            var title = node.get("title");
            var name = node.get("name");
            var arr = this.data[name];
            if (!arr) arr = [];
            MWF.require("MWF.widget.Arraylist", function(){
                var arraylist = new MWF.widget.Arraylist(node, {
                    "title": title,
                    "onChange": function(){
                        var oldValue = this.data[name];
                        this.data[name] = arraylist.toArray();
                    }.bind(this)
                });
                arraylist.load(arr);
                node.arrayList = arraylist;
            }.bind(this));
            node.addEvent("keydown", function(e){e.stopPropagation();});
        }.bind(this));
    },

    loadMaplist: function(){
        var maplists = this.propertyContent.getElements(".MWFMaplist");
        maplists.each(function(node){
            var title = node.get("title");
            var name = node.get("name");
            var lName = name.toLowerCase();
            var collapse = node.get("collapse");
            var mapObj = this.data[name] || {};
            //if (!mapObj) mapObj = {};
            MWF.require("MWF.widget.Maplist", function(){
                node.empty();
                var maplist = new MWF.widget.Maplist(node, {
                    "title": title,
                    "collapse": (collapse) ? true : false,
                    "onChange": function(){
                        this.setValue(name, maplist.toJson());
                    }.bind(this),
                    "isProperty": (lName.contains("properties") || lName.contains("property") || lName.contains("attribute"))
                });
                maplist.load(mapObj);
            }.bind(this));
        }.bind(this));
    },


    loadSerial: function(){
        var serialNodes = this.propertyContent.getElements(".MWFSerial");
        if (serialNodes.length){
        //    this.getSerialRule(function(){
                MWF.xDesktop.requireApp("process.ProcessDesigner", "widget.SerialEditor", function(){
                    serialNodes.each(function(node){
                        var serialEditor = new MWF.xApplication.process.ProcessDesigner.widget.SerialEditor(node, this.data[node.get("name")]);
                        serialEditor.addEvent("change", function(e){
                            this.setValue(node.get("name"), JSON.encode(serialEditor.getData()));
                        }.bind(this));
                        serialEditor.process = this.process;
                        serialEditor.load();
                    }.bind(this));
                }.bind(this));
        //    }.bind(this));
        }
    },
    loadSericalActivitySelect: function(){
        var serialNodes = this.propertyContent.getElements(".MWFSericalActivitySelect");
        if (serialNodes.length){

            serialNodes.each(function(node){
                var select = new Element("select").inject(node);
                select.addEvent("change", function(e){
                    this.setValue(e.target.getParent("div").get("name"), e.target.options[e.target.selectedIndex].value);
                }.bind(this));
                this.listSericalActivityOptions(node, select);

                var refreshNode = new Element("div", {"styles": this.process.css.propertyRefreshFormNode}).inject(node);
                refreshNode.addEvent("click", function(e){
                    this.listSericalActivityOptions(node, select);
                }.bind(this));
            }.bind(this));
        }
    },
    listSericalActivityOptions: function(node, select){
        var name = node.get("name");
        select.empty();

        var option = new Element("option", {"text": "none"}).inject(select);

        var option = new Element("option", {
            "text": this.process.process.begin.name,
            "value": this.process.process.begin.id,
            "selected": (this.data[name]===this.process.process.begin.id)
        }).inject(select);

        this.listSericalActivitys("endList", name, select);
        this.listSericalActivitys("cancelList", name, select);
        this.listSericalActivitys("manualList", name, select);
        this.listSericalActivitys("conditionList", name, select);
        this.listSericalActivitys("choiceList", name, select);
        this.listSericalActivitys("splitList", name, select);
        this.listSericalActivitys("parallelList", name, select);
        this.listSericalActivitys("mergeList", name, select);
        this.listSericalActivitys("embedList", name, select);
        this.listSericalActivitys("publishList", name, select);
        this.listSericalActivitys("delayList", name, select);
        this.listSericalActivitys("invokeList", name, select);
        this.listSericalActivitys("serviceList", name, select);
        this.listSericalActivitys("agentList", name, select);
        this.listSericalActivitys("messageList", name, select);
    },
    listSericalActivitys: function(p, name, select){
        var datas = this.process.process[p];
        if (datas){
            var count = datas.length;
            if (count){
                datas.each(function(data){
                    var option = new Element("option", {
                        "text": data.name,
                        "value": data.id,
                        "selected": (this.data[name]===data.id)
                    }).inject(select);
                }.bind(this));
            }
        }
    },

    loadApplicationSelector: function(){
        var nodes = this.propertyContent.getElements(".MWFApplicationSelect");
        if (nodes.length){
            this._getAppSelector(function(){
                nodes.each(function(node){
                    var title = new Element("div", {"styles": this.process.css.applicationSelectTitle, "text": node.get("title")}).inject(node);
                    var action = new Element("div", {"styles": this.process.css.applicationSelectAction, "text": node.get("title")}).inject(node);
                    var content = new Element("div", {"styles": this.process.css.applicationSelectContent}).inject(node);
                    action.addEvent("click", function(e){
                        this.appSelector.load(function(apps){
                            content.empty();
                            if (apps.length){
                                this.data.targetApplication = apps[0].id;
                                this.data.targetApplicationName = apps[0].name;
                                this.data.targetApplicationAlias = apps[0].alias;

                                new Element("div", {
                                    "styles": this.process.css.applicationSelectItem,
                                    "text": apps[0].name
                                }).inject(content);
                            }else{
                                this.data.targetApplication = "";
                                this.data.targetApplicationName = "";
                                this.data.targetApplicationAlias = "";
                            }
                            var processNodes = this.propertyContent.getElements(".MWFProcessSelect");
                            processNodes.each(function(n){
                                this.data.targetProcess = "";
                                this.data.targetProcessName = "";
                                this.data.targetProcessAlias = "";
                                var processContent = n.getLast();
                                processContent.empty();
                            }.bind(this));

                        }.bind(this));
                    }.bind(this));
                    if (this.data.targetApplication){
                        new Element("div", {
                            "styles": this.process.css.applicationSelectItem,
                            "text": this.data.targetApplicationName
                        }).inject(content);
                    }
                }.bind(this));
            }.bind(this));
        }
    },
    _getAppSelector: function(callback){
        if (!this.appSelector){
            MWF.xDesktop.requireApp("process.ProcessManager", "widget.ApplicationSelector", function(){
                this.appSelector = new MWF.xApplication.process.ProcessManager.widget.ApplicationSelector(this.process.designer, {"maskNode": this.process.designer.content, "multi": false});
                if (callback) callback();
            }.bind(this));
        }else{
            if (callback) callback();
        }
    },
    loadProcessSelector: function(){
        var nodes = this.propertyContent.getElements(".MWFProcessSelect");
        if (nodes.length){
            nodes.each(function(node){
                var title = new Element("div", {"styles": this.process.css.applicationSelectTitle, "text": node.get("title")}).inject(node);
                var action = new Element("div", {"styles": this.process.css.applicationSelectAction, "text": node.get("title")}).inject(node);
                var content = new Element("div", {"styles": this.process.css.applicationSelectContent}).inject(node);

                action.addEvent("click", function(e){
                    new o2.O2Selector(this.process.designer.content, {
                        "count": 1,
                        "type": "process",
                        "onComplete": function(items){
                            if (items.length){
                                content.empty();
                                this.data.targetApplication = items[0].data.application;
                                this.data.targetApplicationName = items[0].data.applicationName;
                                this.data.targetApplicationAlias = "";
                                this.data.targetProcess = items[0].data.id;
                                this.data.targetProcessName = items[0].data.name;
                                this.data.targetProcessAlias = items[0].data.alias;

                                new Element("div", {
                                    "styles": this.process.css.applicationSelectItem,
                                    "text": this.data.targetProcessName
                                }).inject(content);

                            }else{
                                this.data.targetApplication = "";
                                this.data.targetApplicationName = "";
                                this.data.targetApplicationAlias = "";
                                this.data.targetProcess = "";
                                this.data.targetProcessName = "";
                                this.data.targetProcessAlias = "";
                                content.empty();
                            }
                        }.bind(this)
                    });

                }.bind(this));

                if (this.data.targetProcess){
                    new Element("div", {
                        "styles": this.process.css.applicationSelectItem,
                        "text": this.data.targetProcessName
                    }).inject(content);
                }
            }.bind(this));



            // this._getProcessSelector(function(){
            //     nodes.each(function(node){
            //         var title = new Element("div", {"styles": this.process.css.applicationSelectTitle, "text": node.get("title")}).inject(node);
            //         var action = new Element("div", {"styles": this.process.css.applicationSelectAction, "text": node.get("title")}).inject(node);
            //         var content = new Element("div", {"styles": this.process.css.applicationSelectContent}).inject(node);
            //         action.addEvent("click", function(e){
            //             var id = this.data.targetApplication;
            //             this.processSelector.load([id], function(pros){
            //                 content.empty();
            //                 if (pros.length){
            //                     this.data.targetProcess = pros[0].id;
            //                     this.data.targetProcessName = pros[0].name;
            //                     this.data.targetProcessAlias = pros[0].alias;
            //
            //                     new Element("div", {
            //                         "styles": this.process.css.applicationSelectItem,
            //                         "text": pros[0].name
            //                     }).inject(content);
            //                 }else{
            //                     this.data.targetProcess = "";
            //                     this.data.targetProcessName = "";
            //                     this.data.targetProcessAlias = "";
            //                 }
            //             }.bind(this));
            //         }.bind(this));
            //
            //         if (this.data.targetProcess){
            //             new Element("div", {
            //                 "styles": this.process.css.applicationSelectItem,
            //                 "text": this.data.targetProcessName
            //             }).inject(content);
            //         }
            //     }.bind(this));
            // }.bind(this));
        }
    },
    _getProcessSelector: function(callback){
        if (!this.processSelector){
            MWF.xDesktop.requireApp("process.ProcessManager", "widget.ProcessSelector", function(){
                this.processSelector = new MWF.xApplication.process.ProcessManager.widget.ProcessSelector(this.process.designer, {"maskNode": this.process.designer.content, "multi": false});
                if (callback) callback();
            }.bind(this));
        }else{
            if (callback) callback();
        }
    },

    loadIconSelect: function(){
        var nodes = this.propertyContent.getElements(".MWFIcon");
        if (nodes.length){
            nodes.each(function(node){
                var id = node.get("name");
                var icon = this.data[id];
                var iconNode = new Element("div", {"styles": this.process.css.processIconNode}).inject(node);
                if (icon) iconNode.setStyles({"background": "url("+icon+") center center no-repeat"});
                var selectNode = new Element("div", {"styles": this.process.css.processIconSelectNode, "text": this.process.designer.lp.selectIcon}).inject(node);
                selectNode.addEvent("click", function(){
                    this.selectIcon(node);
                }.bind(this));


            }.bind(this));
        }
    },
    loadContextRoot: function(){
        var nodes = this.propertyContent.getElements(".MWFContextRoot");
        if (nodes){
            nodes.each(function(node){
                var name = node.get("name");
                var value = this.data[name];
                var select = new Element("select").inject(node);
                Object.each(layout.serviceAddressList, function(v, key){
                    var option = new Element("option", {"value": key, "text": v.name, "selected": (value==key)}).inject(select);
                }.bind(this));
                var option = new Element("option", {"value": "x_program_center", "text": this.process.designer.lp.centerServer, "selected": (value=="x_program_center")}).inject(select);
                select.addEvent("change", function(){
                    var data = select.options[select.selectedIndex].value;
                    // this.changeJsonDate(name, data);
                    // this.changeData(name, node, value);
                    this.setValue(name, data);
                }.bind(this));
            }.bind(this));
        }
    },

    loadProjection: function(){
        var nodes = this.propertyContent.getElements(".MWFProjection");
        if (nodes){
            nodes.each(function(node){
                var name = node.get("name");
                var value = this.data[name];
                MWF.xDesktop.requireApp("process.ProcessDesigner", "widget.ProjectionEditor", function(){
                    var projection = new MWF.xApplication.process.ProcessDesigner.widget.ProjectionEditor(node, value, {
                        "onChange": function(){
                            this.setValue(node.get("name"), JSON.encode(projection.getData()));
                        }.bind(this),
                        "process": this.process.process.id
                    });
                    projection.load();
                }.bind(this));

                // var select = new Element("select").inject(node);
                // Object.each(layout.desktop.serviceAddressList, function(v, key){
                //     var option = new Element("option", {"value": key, "text": v.name, "selected": (value==key)}).inject(select);
                // }.bind(this));
                // select.addEvent("change", function(){
                //     var data = select.options[select.selectedIndex].value;
                //     // this.changeJsonDate(name, data);
                //     // this.changeData(name, node, value);
                //     this.setValue(name, data);
                // }.bind(this));
            }.bind(this));
        }
    },

    selectIcon: function(node){
        if (!node.iconMenu){
            var tr = node.getParent("tr");
            var p = tr.getPosition(this.process.designer.paperInNode.getNext());
            var iconSelectMenu = new MWF.widget.Menu(node, {"left": p.x-330, "top": p.y, "event": "click", "style": "processIcon"});
            iconSelectMenu.load();
            node.iconMenu = iconSelectMenu;
            var _self = this;
            for (var i=0; i<=48; i++){
                var icon = "../x_component_process_ProcessManager/$Explorer/default/processIcon/process_icon_"+i+".png";
                var item = iconSelectMenu.addMenuItem("", "click", function(){
                    var id = node.get("name");
                    var src = this.item.getElement("img").get("src");

                    _self.data[id] = src;
                    node.getFirst("div").setStyle("background-image", "url("+src+")");
                }, icon);
                item.iconName = icon;
            }
        }
    },



	deleteScriptItem: function(node, script){
		var jsondata = node.get("name");
		this.data[jsondata].erase(script.data.id);
		this.process.scripts[script.data.id] = null;
		delete this.process.scripts[script.data.id];
		this.process.process.scriptList.erase(script.data);
	},
	saveScriptItem: function(node, script){
		var jsondata = node.get("name");
		var scriptList = this.data[jsondata];
		
		var data = script.data;
		var scriptData = this.process.scripts[script.data.id];
		if (!scriptData){
			this.process.process.scriptList.push(data);
			this.process.scripts[script.data.id] = data;
		}
		if (scriptList.indexOf(data.id) == -1){
			this.data[jsondata].push(data.id);
		}
	},
	setScriptItems: function(script, node){
		var jsondata = node.get("name");
		var scriptList = this.data[jsondata];
		if (scriptList){
			scriptList.each(function(id){
				if (id){
					var data = this.process.scripts[id];
					if (data) script.setScriptItem(data);
				}
			}.bind(this));
		}
	},
	
	showMultiActivity: function(activitys){
		this.hide();
		var multiActivityTable = new HtmlTable({
		    "properties": this.process.css.activityListTable
		}).inject(this.propertyContent);
		
		activitys.each(function(activity){
			this.row = multiActivityTable.push([
				{	
			    	"content": " ",
			    	"properties": {
			    		"styles": activity.style.listIcon
			        }
			    },
			    {	
			    	"content": activity.data.name,
			    	"properties": {
			    		"width": "80px",
			    		"styles": this.process.css.list.listText
			        }
			    },
			    {	
			    	"content": " "+activity.data.description,
			    	"properties": {
			    		"styles": this.process.css.list.listTextDescription
			        }
			    }
			]);
		}.bind(this));
	},

    loadOrgEditor: function(){
        var orgNodes = this.propertyContent.getElements(".MWFOrgEditor");
        if(orgNodes.length){
            orgNodes.each(function(node){
                MWF.xDesktop.requireApp("process.ProcessDesigner", "widget.OrgEditor", function(){
                    var editor = new MWF.xApplication.process.ProcessDesigner.widget.OrgEditor(node, this.route, this.data.selectConfig, {
                        "onPostSave": function(script){
                            //this.saveScriptItem(node, script);
                        }.bind(this),
                        "onQueryDelete": function(script){
                            //this.deleteScriptItem(node, script);
                        }.bind(this)
                    });
                    editor.load();
                    //this.setScriptItems(script, node);
                }.bind(this));
            }.bind(this));
        }
	},
    loadQueryTablePublisher: function(){
        var tableNodes = this.propertyContent.getElements(".MWFQueryTablePublisher");
        if(tableNodes.length){
            tableNodes.each(function(node){
                var name = node.get("name");
                var value = this.data[name];
                MWF.xDesktop.requireApp("process.ProcessDesigner", "widget.QueryTablePublisher", function(){
                    var publisher = new MWF.xApplication.process.ProcessDesigner.widget.QueryTablePublisher(node, value, {
                        "onChange": function(){
                            this.setValue(node.get("name"), publisher.getData());
                        }.bind(this)
                    }, this);
                    publisher.load();
                }.bind(this));
            }.bind(this));
        }
    }
});
