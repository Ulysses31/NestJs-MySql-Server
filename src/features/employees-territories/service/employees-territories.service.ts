import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { EmployeeTerritoryEntity } from 'src/models/employee-territory.entity';
import { handleError } from 'src/shared/shared';
import { Repository } from 'typeorm';
import { EmployeesTerritoriesRepository } from './employees-territories-repository';

/**
 * EmployeesTerritoriesService
 * @extends BaseService<EmployeeTerritoryEntity>
 */
@Injectable()
export class EmployeesTerritoriesService extends BaseService<EmployeeTerritoryEntity> {
	constructor(
		@InjectRepository(EmployeesTerritoriesRepository)
		public readonly bsRepo: Repository<EmployeeTerritoryEntity>
	) {
		super(bsRepo);
	}

	/**
	 * Find one
	 * @param id any
	 * @returns Promise<EmployeeTerritoryEntity>
	 */
	async findOne(id: any): Promise<EmployeeTerritoryEntity> {
		try {
			const data = await this.bsRepo.findOneBy({ employeeId: id });
			return await Promise.resolve(data);
		} catch (err) {
			throw handleError(err);
		}
	}
}
