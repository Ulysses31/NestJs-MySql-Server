import { EventSubscriber } from 'typeorm';
import { OrderEntity } from 'src/models/Order.entity';
import { BaseSubscriber } from 'src/core/services/base.subscriber';

/**
 * OrdersSubscriber
 * @extends BaseSubscriber<OrderEntity>
 */
@EventSubscriber()
export class OrdersSubscriber extends BaseSubscriber<OrderEntity> {
	constructor() {
		super();
	}

	// beforeInsert(event: InsertEvent<any>) {
	// 	console.log(`OrdersSubscriber says... BEFORE POST INSERTED: `, event.entity);
	// }

	// afterInsert(event: InsertEvent<any>) {
	// 	console.log(`OrdersSubscriber says... AFTER ENTITY INSERTED: `, event.entity);
	// }
}
