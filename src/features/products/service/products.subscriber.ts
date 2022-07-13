import { EventSubscriber } from 'typeorm';
import { ProductEntity } from 'src/models/product.entity';
import { BaseSubscriber } from 'src/core/services/base.subscriber';

/**
 * ProductsSubscriber
 * @extends BaseSubscriber<ProductEntity>
 */
@EventSubscriber()
export class ProductsSubscriber extends BaseSubscriber<ProductEntity> {
	constructor() {
		super();
	}

	// beforeInsert(event: InsertEvent<any>) {
	// 	console.log(`ProductsSubscriber says... BEFORE POST INSERTED: `, event.entity);
	// }

	// afterInsert(event: InsertEvent<any>) {
	// 	console.log(`ProductsSubscriber says... AFTER ENTITY INSERTED: `, event.entity);
	// }
}
