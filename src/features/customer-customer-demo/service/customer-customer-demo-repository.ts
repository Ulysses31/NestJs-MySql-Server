import { Injectable } from '@nestjs/common';
import { CustomerCustomerDemoEntity } from 'src/models/customer-customer-demo.entity';
import { EntityManager, Repository } from 'typeorm';

/**
 * CustomerCustomerDemosRepository
 * @extends Repository<CustomerCustomerDemoEntity>
 */
@Injectable()
export class CustomerCustomerDemosRepository<
	CustomerCustomerDemoEntity
> extends Repository<CustomerCustomerDemoEntity> {
	constructor(public manager: EntityManager) {
		super(CustomerCustomerDemoEntity, manager);
	}
}
