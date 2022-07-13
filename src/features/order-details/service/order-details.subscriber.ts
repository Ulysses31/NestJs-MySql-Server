import { EventSubscriber } from 'typeorm';
import { OrderDetailEntity } from 'src/models/order-detail.entity';
import { BaseSubscriber } from 'src/core/services/base.subscriber';

/**
 * OrderDetailsSubscriber
 * @extends BaseSubscriber<OrderDetailEntity>
 */
@EventSubscriber()
export class OrderDetailsSubscriber extends BaseSubscriber<OrderDetailEntity> {
	constructor() {
		super();
	}

	// beforeInsert(event: InsertEvent<any>) {
	// 	console.log(`OrderDetailsSubscriber says... BEFORE POST INSERTED: `, event.entity);
	// }

	// afterInsert(event: InsertEvent<any>) {
	// 	console.log(`OrderDetailsSubscriber says... AFTER ENTITY INSERTED: `, event.entity);
	// }
}
