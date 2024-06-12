define("ItcAirplane1Page", [], function() {
	return {
		entitySchemaName: "ItcAirplane",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "ItcAirplaneFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "ItcAirplane"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "ItcCodec3be0c94-6760-4da5-b961-1ace9317b3eb",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "ItcCode"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ItcModel8642b070-2f87-40d9-add3-b1840fd63549",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "ItcModel"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ItcNotes3fd38bc2-d267-4737-9072-701aae82b421",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "ItcNotes",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ItcManufacturer75c5f0d6-deab-4570-aa70-7bae65554cb7",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "ItcManufacturer"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ItcCountry520e64ad-44fd-44be-a6db-f526f1fd00d5",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "ItcCountry"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "TabSpecifications",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabSpecificationsTabCaption"
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
				"name": "TabSpecificationsMainInfoGroup",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabSpecificationsMainInfoGroupGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "TabSpecifications",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabSpecificationsGridLayout9c2ab677",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "TabSpecificationsMainInfoGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ItcCruisingSpeed686b5122-2be0-4097-b5e2-636b9a620472",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "TabSpecificationsGridLayout9c2ab677"
					},
					"bindTo": "ItcCruisingSpeed"
				},
				"parentName": "TabSpecificationsGridLayout9c2ab677",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ItcFlightRangeWithPassengersAndLuggagecd7f365d-1922-4d2b-9e33-0daeee3ce243",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "TabSpecificationsGridLayout9c2ab677"
					},
					"bindTo": "ItcFlightRangeWithPassengersAndLuggage"
				},
				"parentName": "TabSpecificationsGridLayout9c2ab677",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ItcOperationalCeilingf9aca069-a879-47ed-bfd2-48b485efc4a9",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "TabSpecificationsGridLayout9c2ab677"
					},
					"bindTo": "ItcOperationalCeiling"
				},
				"parentName": "TabSpecificationsGridLayout9c2ab677",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ItcRequiredRunwayLength10539e10-6745-45b9-b418-60cd78d3b47e",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "TabSpecificationsGridLayout9c2ab677"
					},
					"bindTo": "ItcRequiredRunwayLength"
				},
				"parentName": "TabSpecificationsGridLayout9c2ab677",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ItcEngineebe6235a-fdd4-4f8a-9173-b5c5f36504a0",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "TabSpecificationsGridLayout9c2ab677"
					},
					"bindTo": "ItcEngine"
				},
				"parentName": "TabSpecificationsGridLayout9c2ab677",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "TabSizesGroup",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabSizesGroupGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "TabSpecifications",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabSpecificationsGridLayoutdd19f455",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "TabSizesGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ItcWingspan17d7e2b7-7add-439d-98bd-3ed172bda1a3",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "TabSpecificationsGridLayoutdd19f455"
					},
					"bindTo": "ItcWingspan"
				},
				"parentName": "TabSpecificationsGridLayoutdd19f455",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ItcLenght9a6c71d0-0ec8-4ab8-b4f3-709702bf324b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "TabSpecificationsGridLayoutdd19f455"
					},
					"bindTo": "ItcLenght"
				},
				"parentName": "TabSpecificationsGridLayoutdd19f455",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ItcHeight1600beb9-b669-4d54-a300-8d60c7bd7d83",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "TabSpecificationsGridLayoutdd19f455"
					},
					"bindTo": "ItcHeight"
				},
				"parentName": "TabSpecificationsGridLayoutdd19f455",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ItcFuselageDiameter2aa1f86a-e009-4130-b13c-770268ce7cbc",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "TabSpecificationsGridLayoutdd19f455"
					},
					"bindTo": "ItcFuselageDiameter"
				},
				"parentName": "TabSpecificationsGridLayoutdd19f455",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TabNumberPlacesGroup",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabNumberPlacesGroupGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "TabSpecifications",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TabSpecificationsGridLayout2b662a99",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "TabNumberPlacesGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ItcCapacity2b25b2f9-438a-4480-b3ea-334164cb78bd",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "TabSpecificationsGridLayout2b662a99"
					},
					"bindTo": "ItcCapacity"
				},
				"parentName": "TabSpecificationsGridLayout2b662a99",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ItcEconomy660c7d5f-8b9b-41b0-b0f8-a5a16c48e606",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "TabSpecificationsGridLayout2b662a99"
					},
					"bindTo": "ItcEconomy"
				},
				"parentName": "TabSpecificationsGridLayout2b662a99",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ItcBusinesse401270f-a6a4-4700-b2ec-b483d7022f8f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "TabSpecificationsGridLayout2b662a99"
					},
					"bindTo": "ItcBusiness"
				},
				"parentName": "TabSpecificationsGridLayout2b662a99",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TabMassesAndLoadsGroup",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabMassesAndLoadsGroupGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "TabSpecifications",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TabSpecificationsGridLayout090ae61a",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "TabMassesAndLoadsGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ItcTakeOffWeightfa4f2e17-916d-47c5-a3c7-ecd51d768d12",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "TabSpecificationsGridLayout090ae61a"
					},
					"bindTo": "ItcTakeOffWeight"
				},
				"parentName": "TabSpecificationsGridLayout090ae61a",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ItcEmptyWeightc69ebd38-6668-4a90-a058-2b8471348de3",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "TabSpecificationsGridLayout090ae61a"
					},
					"bindTo": "ItcEmptyWeight"
				},
				"parentName": "TabSpecificationsGridLayout090ae61a",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ItcWeightWithoutFuel581b3a69-6934-4b71-865d-4dc2211d8e4e",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "TabSpecificationsGridLayout090ae61a"
					},
					"bindTo": "ItcWeightWithoutFuel"
				},
				"parentName": "TabSpecificationsGridLayout090ae61a",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ItcPaidLoadbee60d29-0580-48fd-9f10-33bc19ceb553",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "TabSpecificationsGridLayout090ae61a"
					},
					"bindTo": "ItcPaidLoad"
				},
				"parentName": "TabSpecificationsGridLayout090ae61a",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ItcLandingWeightc8b64c50-2b68-4601-a1e5-e8ae0824d35b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "TabSpecificationsGridLayout090ae61a"
					},
					"bindTo": "ItcLandingWeight"
				},
				"parentName": "TabSpecificationsGridLayout090ae61a",
				"propertyName": "items",
				"index": 4
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
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "ItcNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 2
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
