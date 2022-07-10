import { BaseSubscriber } from './../../../core/services/base.subscriber';
import { EventSubscriber } from 'typeorm';
import { CustomerEntity } from 'src/models/customer.entity';

@EventSubscriber()
export class CustomersSubscriber extends BaseSubscriber<CustomerEntity> {
	constructor() {
		super();
	}

	// beforeInsert(event: InsertEvent<any>) {
	// 	console.log(`CustomersSubscriber says... BEFORE POST INSERTED: `, event.entity);
	// }

	// afterInsert(event: InsertEvent<any>) {
	// 	console.log(`CustomersSubscriber says... AFTER ENTITY INSERTED: `, event.entity);
	// }
}
