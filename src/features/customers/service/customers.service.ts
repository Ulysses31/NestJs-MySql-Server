import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { CustomerEntity } from 'src/models/customer.entity';
import { Repository } from 'typeorm';
import { CustomersRepository } from './customers-repository';

@Injectable()
export class CustomersService extends BaseService<CustomerEntity> {
	constructor(
		@InjectRepository(CustomersRepository)
		public readonly bsRepo: Repository<CustomerEntity>
	) {
		super(bsRepo);
	}
}
