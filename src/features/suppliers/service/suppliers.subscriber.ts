import { EventSubscriber } from 'typeorm';
import { SupplierEntity } from 'src/models/supplier.entity';
import { BaseSubscriber } from 'src/core/services/base.subscriber';

/**
 * SuppliersSubscriber
 * @extends BaseSubscriber<SupplierEntity>
 */
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
