import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { CustomerDemographicEntity } from 'src/models/customer-demographic.entity';
import { Repository } from 'typeorm';
import { CustomerDemographicsRepository } from './customer-demographic-repository';

@Injectable()
export class CustomerDemographicsService extends BaseService<CustomerDemographicEntity> {
	constructor(
		@InjectRepository(CustomerDemographicsRepository)
		public readonly bsRepo: Repository<CustomerDemographicEntity>
	) {
		super(bsRepo);
	}
}
