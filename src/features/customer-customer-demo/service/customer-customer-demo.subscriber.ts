import { BaseSubscriber } from './../../../core/services/base.subscriber';
import { EventSubscriber } from 'typeorm';
import { CustomerCustomerDemoEntity } from 'src/models/customer-customer-demo.entity';

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
