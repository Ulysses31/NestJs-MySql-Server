import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { CustomerDemographicEntity } from 'src/models/customer-demographic.entity';
import { handleError } from 'src/shared/shared';
import { Repository } from 'typeorm';
import { CustomerDemographicsRepository } from './customer-demographic-repository';

/**
 * CustomerDemographicsService
 * @extends BaseService<CustomerDemographicEntity>
 */
@Injectable()
export class CustomerDemographicsService extends BaseService<CustomerDemographicEntity> {
	constructor(
		@InjectRepository(CustomerDemographicsRepository)
		public readonly bsRepo: Repository<CustomerDemographicEntity>
	) {
		super(bsRepo);
	}

	/**
	 * Find one
	 * @param id any
	 * @returns Promise<CustomerDemographicEntity>
	 */
	async findOne(id: any): Promise<CustomerDemographicEntity> {
		try {
			const data = await this.bsRepo.findOneBy({
				customerTypeId: id
			});
			return await Promise.resolve(data);
		} catch (err) {
			throw handleError(err);
		}
	}
}
