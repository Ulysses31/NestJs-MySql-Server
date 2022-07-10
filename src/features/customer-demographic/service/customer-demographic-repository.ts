import { Injectable } from '@nestjs/common';
import { CustomerDemographicEntity } from 'src/models/customer-demographic.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class CustomerDemographicsRepository<
	CustomerDemographicEntity
> extends Repository<CustomerDemographicEntity> {
	constructor(public manager: EntityManager) {
		super(CustomerDemographicEntity, manager);
	}
}
