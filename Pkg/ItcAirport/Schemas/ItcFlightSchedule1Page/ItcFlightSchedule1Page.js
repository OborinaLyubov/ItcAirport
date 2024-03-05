define("ItcFlightSchedule1Page", [], function() {
	return {
		entitySchemaName: "ItcFlightSchedule",
		attributes: {
			"GetTravelTime": {
				"dependencies": [
					{
						"columns": ["ItcArrivalSchedule", "ItcDepartureSchedule"],
						"methodName": "getTravelTime"
					}
				]
			},
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "ItcFlightScheduleFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "ItcFlightSchedule"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			// Получение разницы времени в пути
			getTravelTime: function(){
				var travelTime = "";
				var arrivalSchedule = this.get("ItcArrivalSchedule");
				var departureSchedule = this.get("ItcDepartureSchedule");
				if(!Ext.isEmpty(arrivalSchedule) && !Ext.isEmpty(departureSchedule)) {
					console.log(arrivalSchedule - departureSchedule);
					var differenceHours = Math.floor((arrivalSchedule - departureSchedule) / (1000 * 3600));
					if (differenceHours != 0) {
						travelTime = differenceHours.toString() + " ч.";
					}
					
					var differenceMinutes = Math.floor((arrivalSchedule - departureSchedule) / (1000 * 60) - (60 * differenceHours));
					if (differenceMinutes != 0){
						travelTime = travelTime + " " + differenceMinutes.toString() + " мин.";
					}
				}
				this.set("ItcTravelTime", travelTime);
			}
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "ItcFlight4f87e9f5-7f32-4ee4-a273-338786b1dd9d",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ItcFlight"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ItcTravelTime546020a5-bd1f-4455-a52a-e9d2ef46cbca",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ItcTravelTime"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ItcDepartureSchedule4b1928bc-d439-4d4f-9cce-53e646bc91a5",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "ItcDepartureSchedule"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ItcArrivalSchedule3dd9ed22-f285-4686-a613-7ba1d7129581",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "ItcArrivalSchedule"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ItcNotes133f8269-69b5-499c-8e98-207407d3a1d3",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
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
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
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
					"order": 1
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
