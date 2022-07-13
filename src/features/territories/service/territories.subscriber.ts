import { EventSubscriber } from 'typeorm';
import { TerritoryEntity } from 'src/models/territory.entity';
import { BaseSubscriber } from 'src/core/services/base.subscriber';

/**
 * TerritoriesSubscriber
 * @extends BaseSubscriber<TerritoryEntity>
 */
@EventSubscriber()
export class TerritoriesSubscriber extends BaseSubscriber<TerritoryEntity> {
	constructor() {
		super();
	}

	// beforeInsert(event: InsertEvent<any>) {
	// 	console.log(`TerritoriesSubscriber says... BEFORE POST INSERTED: `, event.entity);
	// }

	// afterInsert(event: InsertEvent<any>) {
	// 	console.log(`TerritoriesSubscriber says... AFTER ENTITY INSERTED: `, event.entity);
	// }
}
