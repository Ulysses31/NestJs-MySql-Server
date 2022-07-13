import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { CustomerCustomerDemoEntity } from 'src/models/customer-customer-demo.entity';
import { handleError } from 'src/shared/shared';
import { Repository } from 'typeorm';
import { CustomerCustomerDemosRepository } from './customer-customer-demo-repository';

/**
 * CustomerCustomerDemosService
 * @extends BaseService<CustomerCustomerDemoEntity>
 */
@Injectable()
export class CustomerCustomerDemosService extends BaseService<CustomerCustomerDemoEntity> {
	constructor(
		@InjectRepository(CustomerCustomerDemosRepository)
		public readonly bsRepo: Repository<CustomerCustomerDemoEntity>
	) {
		super(bsRepo);
	}

	/**
	 * Find one
	 * @param id any
	 * @returns Promise<CustomerCustomerDemoEntity>
	 */
	async findOne(id: any): Promise<CustomerCustomerDemoEntity> {
		try {
			const data = await this.bsRepo.findOneBy({ customerId: id });
			return await Promise.resolve(data);
		} catch (err) {
			throw handleError(err);
		}
	}
}
