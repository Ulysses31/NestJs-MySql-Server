import { BaseSubscriber } from './../../../core/services/base.subscriber';
import { EventSubscriber } from 'typeorm';
import { EmployeeTerritoryEntity } from 'src/models/employee-territory.entity';

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
