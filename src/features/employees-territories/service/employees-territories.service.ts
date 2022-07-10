import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { EmployeeTerritoryEntity } from 'src/models/employee-territory.entity';
import { Repository } from 'typeorm';
import { EmployeesTerritoriesRepository } from './employees-territories-repository';

@Injectable()
export class EmployeesTerritoriesService extends BaseService<EmployeeTerritoryEntity> {
	constructor(
		@InjectRepository(EmployeesTerritoriesRepository)
		public readonly bsRepo: Repository<EmployeeTerritoryEntity>
	) {
		super(bsRepo);
	}
}
