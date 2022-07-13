import { Injectable } from '@nestjs/common';
import { EmployeeEntity } from 'src/models/employee.entity';
import { EntityManager, Repository } from 'typeorm';

/**
 * EmployeesRepository
 * @extends Repository<EmployeeEntity>
 */
@Injectable()
export class EmployeesRepository<
	EmployeeEntity
> extends Repository<EmployeeEntity> {
	constructor(public manager: EntityManager) {
		super(EmployeeEntity, manager);
	}
}
