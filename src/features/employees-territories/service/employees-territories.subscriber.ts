import { EventSubscriber } from 'typeorm';
import { EmployeeTerritoryEntity } from 'src/models/employee-territory.entity';
import { BaseSubscriber } from 'src/core/services/base.subscriber';

/**
 * EmployeesTerritoriesSubscriber
 * @extends BaseSubscriber<EmployeeTerritoryEntity>
 */
@EventSubscriber()
export class EmployeesTerritoriesSubscriber extends BaseSubscriber<EmployeeTerritoryEntity> {
	constructor() {
		super();
	}

	// beforeInsert(event: InsertEvent<any>) {
	// 	console.log(`EmployeesTerritoriesSubscriber says... BEFORE POST INSERTED: `, event.entity);
	// }

	// afterInsert(event: InsertEvent<any>) {
	// 	console.log(`EmployeesTerritoriesSubscriber says... AFTER ENTITY INSERTED: `, event.entity);
	// }
}
