import { Injectable } from '@nestjs/common';
import { EmployeeTerritoryEntity } from 'src/models/employee-territory.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class EmployeesTerritoriesRepository<
	EmployeeTerritoryEntity
> extends Repository<EmployeeTerritoryEntity> {
	constructor(public manager: EntityManager) {
		super(EmployeeTerritoryEntity, manager);
	}
}
