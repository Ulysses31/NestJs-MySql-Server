import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { CustomersEntity } from 'src/models/customer.entity';
import { handleError } from 'src/shared/shared';
import { Repository } from 'typeorm';
import { CustomersRepository } from './customers-repository';

/**
 * CustomersService
 * @extends BaseService<CustomersEntity>
 */
@Injectable()
export class CustomersService extends BaseService<CustomersEntity> {
	constructor(
		@InjectRepository(CustomersRepository)
		public readonly bsRepo: Repository<CustomersEntity>
	) {
		super(bsRepo);
	}

	/**
	 * Find one
	 * @param id any
	 * @returns Promise<CustomersEntity>
	 */
	async findOne(id: any): Promise<CustomersEntity> {
		try {
			const data = await this.bsRepo.findOneBy({ customerId: id });
			return await Promise.resolve(data);
		} catch (err) {
			throw handleError(err);
		}
	}
}
