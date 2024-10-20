define("FileDetailV2", [], function() {
	return {
		methods: {
			/**
			 * Скрыто действие "Добавить ссылку"
			 * @override
			 */
			getAddLinkMenuItem: function() {
				return this.getButtonMenuItem({
					Caption: {"bindTo": "Resources.Strings.AddLinkCaption"},
					Click: {"bindTo": "addLinkRecord"},
					Visible: false
				});
			},
			
			/**
			 * Скрыто действие "Экспорт в Excel"
			 * @override
			 */
			getExportToExcelFileMenuItem: function() {
				return this.getButtonMenuItem({
					"Visible": false
				});
			},
			
			/**
			 * Скрыто действие "Импорт данных"
			 * @override
			 */
			getFileImportMenuItemCfg: function() {
				return {
					"Visible": false
				};
			},
			
			/**
			 * Скрыто действие "Настройка колонок"
			 * @override
			 */
			getGridSettingsMenuItem: function() {
				return this.getButtonMenuItem({
					"Visible": false
				});
			},
			
			/**
			 * Скрыто действие "Изменить свойства"
			 * @override
			 */
			getEditRecordMenuItem: BPMSoft.emptyFn,
			
			/**
			 * Скрыто действие "Добавить ссылку на базу знаний"
			 * @override
			 */
			generateButtonMenuItems: function() {
				const itemsConfig = [];
				if (!this.Ext.isEmpty(this.entityTypeConfig)) {
					this.entityTypeConfig.eachKey(function(entityName, item) {
						const addMethodName = "add" + entityName + "Record";
						this[addMethodName] = this.addEntityLinkRecord.bind(this, entityName);
						itemsConfig.push({
							"viewModelItem": this.getButtonMenuItem({
								Caption: item.menuItemCaption,
								Click: {"bindTo": addMethodName},
								Visible: false
							}),
							"position": item.position,
							"key": entityName + "Item"
						});
					}, this);
				}
				return itemsConfig;
			},
		}
	};
});