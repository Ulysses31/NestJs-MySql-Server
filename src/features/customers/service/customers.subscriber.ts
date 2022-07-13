import { EventSubscriber } from 'typeorm';
import { CustomersEntity } from 'src/models/customer.entity';
import { BaseSubscriber } from 'src/core/services/base.subscriber';

/**
 * CustomersSubscriber
 * @extends BaseSubscriber<CustomersEntity>
 */
@EventSubscriber()
export class CustomersSubscriber extends BaseSubscriber<CustomersEntity> {
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
