import { EventSubscriber } from 'typeorm';
import { CustomerCustomerDemoEntity } from 'src/models/customer-customer-demo.entity';
import { BaseSubscriber } from 'src/core/services/base.subscriber';

/**
 * CustomerCustomerDemosSubscriber
 * @extends BaseSubscriber<CustomerCustomerDemoEntity>
 */
@EventSubscriber()
export class CustomerCustomerDemosSubscriber extends BaseSubscriber<CustomerCustomerDemoEntity> {
	constructor() {
		super();
	}

	// beforeInsert(event: InsertEvent<any>) {
	// 	console.log(`CustomerCustomerDemosSubscriber says... BEFORE POST INSERTED: `, event.entity);
	// }

	// afterInsert(event: InsertEvent<any>) {
	// 	console.log(`CustomerCustomerDemosSubscriber says... AFTER ENTITY INSERTED: `, event.entity);
	// }
}
