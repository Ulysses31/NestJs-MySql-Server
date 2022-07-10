import { Injectable } from '@nestjs/common';
import { CustomerEntity } from 'src/models/Customer.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class CustomersRepository<
	CustomerEntity
> extends Repository<CustomerEntity> {
	constructor(public manager: EntityManager) {
		super(CustomerEntity, manager);
	}
}
