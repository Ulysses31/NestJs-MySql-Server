import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { CustomerCustomerDemoEntity } from 'src/models/customer-customer-demo.entity';
import { Repository } from 'typeorm';
import { CustomerCustomerDemosRepository } from './customer-customer-demo-repository';

@Injectable()
export class CustomerCustomerDemosService extends BaseService<CustomerCustomerDemoEntity> {
	constructor(
		@InjectRepository(CustomerCustomerDemosRepository)
		public readonly bsRepo: Repository<CustomerCustomerDemoEntity>
	) {
		super(bsRepo);
	}
}
