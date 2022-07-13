import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { EmployeeEntity } from 'src/models/employee.entity';
import { handleError } from 'src/shared/shared';
import { Repository } from 'typeorm';
import { EmployeesRepository } from './employees-repository';

/**
 * EmployeesService
 * @extends BaseService<EmployeeEntity>
 */
@Injectable()
export class EmployeesService extends BaseService<EmployeeEntity> {
	constructor(
		@InjectRepository(EmployeesRepository)
		public readonly bsRepo: Repository<EmployeeEntity>
	) {
		super(bsRepo);
	}

	/**
	 * Find one
	 * @param id any
	 * @returns Promise<EmployeeEntity>
	 */
	async findOne(id: any): Promise<EmployeeEntity> {
		try {
			const data = await this.bsRepo.findOneBy({ employeeId: id });
			return await Promise.resolve(data);
		} catch (err) {
			throw handleError(err);
		}
	}
}
