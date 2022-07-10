import { BaseSubscriber } from './../../../core/services/base.subscriber';
import { EventSubscriber } from 'typeorm';
import { ShipperEntity } from 'src/models/shipper.entity';

@EventSubscriber()
export class ShippersSubscriber extends BaseSubscriber<ShipperEntity> {
	constructor() {
		super();
	}

	// beforeInsert(event: InsertEvent<any>) {
	// 	console.log(`ShippersSubscriber says... BEFORE POST INSERTED: `, event.entity);
	// }

	// afterInsert(event: InsertEvent<any>) {
	// 	console.log(`ShippersSubscriber says... AFTER ENTITY INSERTED: `, event.entity);
	// }
}
