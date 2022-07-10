import { BaseSubscriber } from './../../../core/services/base.subscriber';
import { EventSubscriber } from 'typeorm';
import { CustomerDemographicEntity } from 'src/models/customer-demographic.entity';

@EventSubscriber()
export class CustomerDemographicsSubscriber extends BaseSubscriber<CustomerDemographicEntity> {
	constructor() {
		super();
	}

	// beforeInsert(event: InsertEvent<any>) {
	// 	console.log(`CustomerDemographicsSubscriber says... BEFORE POST INSERTED: `, event.entity);
	// }

	// afterInsert(event: InsertEvent<any>) {
	// 	console.log(`CustomerDemographicsSubscriber says... AFTER ENTITY INSERTED: `, event.entity);
	// }
}
