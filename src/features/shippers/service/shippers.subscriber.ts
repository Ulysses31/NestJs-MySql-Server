import { EventSubscriber } from 'typeorm';
import { ShipperEntity } from 'src/models/shipper.entity';
import { BaseSubscriber } from 'src/core/services/base.subscriber';

/**
 * ShippersSubscriber
 * @extends BaseSubscriber<ShipperEntity>
 */
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
