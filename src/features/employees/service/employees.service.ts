import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { EmployeeEntity } from 'src/models/employee.entity';
import { Repository } from 'typeorm';
import { EmployeesRepository } from './employees-repository';

@Injectable()
export class EmployeesService extends BaseService<EmployeeEntity> {
	constructor(
		@InjectRepository(EmployeesRepository)
		public readonly bsRepo: Repository<EmployeeEntity>
	) {
		super(bsRepo);
	}
}
