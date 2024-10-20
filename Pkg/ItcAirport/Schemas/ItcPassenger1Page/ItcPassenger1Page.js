define("ItcPassenger1Page", [], function() {
	return {
		entitySchemaName: "ItcPassenger",
		attributes: {
			/**
			 * Значение виртуального поля "ФИО"
			 */
			"ItcFIO": {
				"dataValueType": BPMSoft.DataValueType.TEXT
			},
			/**
			 * Значение виртуального поля "Email"
			 */
			"ItcEmail": {
				"dataValueType": BPMSoft.DataValueType.TEXT
			},
			/**
			 * Значение виртуального поля "Телефон"
			 */
			"ItcPhone": {
				"dataValueType": BPMSoft.DataValueType.TEXT
			},
			
			"ItcContact": {
				"lookupListConfig": {
					"columns": ["Name", "Phone", "Email"]
				},
				"dependencies": [
					{
						"columns": ["ItcContact"],
						"methodName": "setContactData"
					}
				]
			}
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "ItcPassengerFile",
				"filter": {
					"detailColumn": "ItcPassenger",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			/**
			 * Обработчик инициализированной сущности
			 * @override
			 */
			onEntityInitialized: function() {
				this.callParent(arguments);
				
				this.setContactData();
				if (this.isNew) {
					this.setPassengerCore();
				}
			},
			
			/**
			 * Заполнение данных о контакте на вкладке "Основная информация"
			 */
			setContactData: function() {
				const contact = this.get("ItcContact");
				
				if (!Ext.isEmpty(contact)) {
					this.set("ItcFIO", contact.Name);
					this.set("ItcEmail", contact.Email);
					this.set("ItcPhone", contact.Phone);
				} else {
					this.set("ItcFIO", null);
					this.set("ItcEmail", null);
					this.set("ItcPhone", null);
				}
			},
			
			/**
			 * Заполнение поля "Код пассажира", если новая запись
			 */
			setPassengerCore: function() {
				this.BPMSoft.SysSettings.querySysSettingsItem(
					"ItcPassengerCodeMask",
        			function(maskValue) {
						this.BPMSoft.SysSettings.querySysSettingsItem(
						"ItcPassengerLastNumber",
						function(number) {
							let currentNumber = number + 1;
							this.set("ItcCode", Ext.String.format(maskValue, currentNumber));
						}, 
						this);	
					}, 
					this);			
			}
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "ItcCode_ItcAirport",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ItcCode",
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ItcPassport_ItcAirport",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "ItcPassport"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ItcContact_ItcAirport",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 13,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "ItcContact"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabMainInfo",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabMainInfoTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabMainInfoContactGroup",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabMainInfoContactGroupGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "TabMainInfo",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabMainInfoGridLayout41ac331e",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "TabMainInfoContactGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ItcFIO_ItcAirport",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "TabMainInfoGridLayout41ac331e"
					},
					"caption": {
						"bindTo": "Resources.Strings.ItcFIOCaption"
					},
					"bindTo": "ItcFIO",
					"enabled": false
				},
				"parentName": "TabMainInfoGridLayout41ac331e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ItcEmail_ItcAirport",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "TabMainInfoGridLayout41ac331e"
					},
					"caption": {
						"bindTo": "Resources.Strings.ItcEmailCaption"
					},
					"bindTo": "ItcEmail",
					"enabled": false
				},
				"parentName": "TabMainInfoGridLayout41ac331e",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ItcPhone_ItcAirport",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 13,
						"row": 1,
						"layoutName": "TabMainInfoGridLayout41ac331e"
					},
					"caption": {
						"bindTo": "Resources.Strings.ItcPhoneCaption"
					},
					"bindTo": "ItcPhone",
					"enabled": false
				},
				"parentName": "TabMainInfoGridLayout41ac331e",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "remove",
				"name": "ESNTab"
			},
			{
				"operation": "remove",
				"name": "ESNFeedContainer"
			},
			{
				"operation": "remove",
				"name": "ESNFeed"
			}
		]/**SCHEMA_DIFF*/
	};
});
