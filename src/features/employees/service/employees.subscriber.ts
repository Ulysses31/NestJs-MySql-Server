import { BaseSubscriber } from './../../../core/services/base.subscriber';
import { EventSubscriber } from 'typeorm';
import { EmployeeEntity } from 'src/models/employee.entity';

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
