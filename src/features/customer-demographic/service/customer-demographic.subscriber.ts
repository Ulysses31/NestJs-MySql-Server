import { EventSubscriber } from 'typeorm';
import { CustomerDemographicEntity } from 'src/models/customer-demographic.entity';
import { BaseSubscriber } from 'src/core/services/base.subscriber';

/**
 * CustomerDemographicsSubscriber
 * @extends BaseSubscriber<CustomerDemographicEntity>
 */
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
