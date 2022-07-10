import { BaseSubscriber } from './../../../core/services/base.subscriber';
import { EventSubscriber } from 'typeorm';
import { OrderDetailEntity } from 'src/models/order-detail.entity';

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
