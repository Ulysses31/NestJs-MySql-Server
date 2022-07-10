import { BaseSubscriber } from './../../../core/services/base.subscriber';
import { EventSubscriber } from 'typeorm';
import { CategoryEntity } from 'src/models/category.entity';

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
