namespace BPMSoft.Configuration.ITC.Listeners
{
	using System;
	using BPMSoft.Core.Entities;
	using BPMSoft.Core.Entities.Events;
	
	#region Class: ItcPassengerEventListener
	
	/// <summary>
	/// Прослушиватель событий сущности "Пассажир".
	/// </summary>
	/// <seealso cref="BaseEntityEventListener" />
	[EntityEventListener(SchemaName = "ItcPassenger")]
	public class ItcPassengerEventListener : BaseEntityEventListener
	{

		#region Methods: Public
		
		/// <summary>
		/// События перед созданием записи.
		/// </summary>
		/// <param name="sender">Отправитель события.</param>
		/// <param name="e"></param>
		public override void OnInserting(object sender, EntityBeforeEventArgs e) {
			base.OnInserting(sender, e);
			Entity passenger = (Entity)sender;
			SetPassengerCode(passenger);
		}
		
		#endregion
		
		#region Methods: Protected
		
		/// <summary>
		/// Актуализация значения системной настройки 
		/// "Текущий номер пассажира" перед созданием записи.
		/// </summary>
		/// <param name="entity">Сущность.</param>
		protected virtual void SetPassengerCode(Entity entity)
		{
			var currentNumber = BPMSoft.Core.Configuration.SysSettings.GetValue(entity.UserConnection, "ItcPassengerLastNumber");
			BPMSoft.Core.Configuration.SysSettings.SetValue(entity.UserConnection, "ItcPassengerLastNumber", (int)currentNumber + 1);
		}
		
		#endregion
		
	}
	
	#endregion 
	
}