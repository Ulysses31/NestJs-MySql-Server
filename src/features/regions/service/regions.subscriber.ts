import { BaseSubscriber } from './../../../core/services/base.subscriber';
import { EventSubscriber } from 'typeorm';
import { RegionEntity } from 'src/models/region.entity';

@EventSubscriber()
export class RegionsSubscriber extends BaseSubscriber<RegionEntity> {
	constructor() {
		super();
	}

	// beforeInsert(event: InsertEvent<any>) {
	// 	console.log(`RegionsSubscriber says... BEFORE POST INSERTED: `, event.entity);
	// }

	// afterInsert(event: InsertEvent<any>) {
	// 	console.log(`RegionsSubscriber says... AFTER ENTITY INSERTED: `, event.entity);
	// }
}
