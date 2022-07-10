import { BaseSubscriber } from './../../../core/services/base.subscriber';
import { EventSubscriber } from 'typeorm';
import { SupplierEntity } from 'src/models/supplier.entity';

@EventSubscriber()
export class SuppliersSubscriber extends BaseSubscriber<SupplierEntity> {
	constructor() {
		super();
	}

	// beforeInsert(event: InsertEvent<any>) {
	// 	console.log(`SuppliersSubscriber says... BEFORE POST INSERTED: `, event.entity);
	// }

	// afterInsert(event: InsertEvent<any>) {
	// 	console.log(`SuppliersSubscriber says... AFTER ENTITY INSERTED: `, event.entity);
	// }
}
