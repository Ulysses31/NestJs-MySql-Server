import { EventSubscriber } from 'typeorm';
import { CategoryEntity } from 'src/models/category.entity';
import { BaseSubscriber } from 'src/core/services/base.subscriber';

/**
 * CategoriesSubscriber
 * @extends BaseSubscriber<CategoryEntity>
 */
@EventSubscriber()
export class CategoriesSubscriber extends BaseSubscriber<CategoryEntity> {
	constructor() {
		super();
	}

	// beforeInsert(event: InsertEvent<any>) {
	// 	console.log(`CategoriesSubscriber says... BEFORE POST INSERTED: `, event.entity);
	// }

	// afterInsert(event: InsertEvent<any>) {
	// 	console.log(`CategoriesSubscriber says... AFTER ENTITY INSERTED: `, event.entity);
	// }
}
