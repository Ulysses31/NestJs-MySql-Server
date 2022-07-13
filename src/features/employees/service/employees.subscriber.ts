import { EventSubscriber } from 'typeorm';
import { EmployeeEntity } from 'src/models/employee.entity';
import { BaseSubscriber } from 'src/core/services/base.subscriber';

/**
 * EmployeesSubscriber
 * @extends BaseSubscriber<EmployeeEntity>
 */
@EventSubscriber()
export class EmployeesSubscriber extends BaseSubscriber<EmployeeEntity> {
	constructor() {
		super();
	}

	// beforeInsert(event: InsertEvent<any>) {
	// 	console.log(`EmployeesSubscriber says... BEFORE POST INSERTED: `, event.entity);
	// }

	// afterInsert(event: InsertEvent<any>) {
	// 	console.log(`EmployeesSubscriber says... AFTER ENTITY INSERTED: `, event.entity);
	// }
}
