import { BaseSubscriber } from './../../../core/services/base.subscriber';
import { EventSubscriber } from 'typeorm';
import { OrderEntity } from 'src/models/Order.entity';

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
