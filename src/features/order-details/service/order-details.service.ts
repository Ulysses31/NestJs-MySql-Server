import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { OrderDetailEntity } from 'src/models/order-detail.entity';
import { handleError } from 'src/shared/shared';
import { Repository } from 'typeorm';
import { OrderDetailsRepository } from './order-details-repository';

/**
 * OrderDetailsService
 * @extends BaseService<OrderDetailEntity>
 */
@Injectable()
export class OrderDetailsService extends BaseService<OrderDetailEntity> {
	constructor(
		@InjectRepository(OrderDetailsRepository)
		public readonly bsRepo: Repository<OrderDetailEntity>
	) {
		super(bsRepo);
	}

	/**
	 * Find one
	 * @param id any
	 * @returns Promise<OrderDetailEntity>
	 */
	async findOne(id: any): Promise<OrderDetailEntity> {
		try {
			const data = await this.bsRepo.findOneBy({ orderId: id });
			return await Promise.resolve(data);
		} catch (err) {
			throw handleError(err);
		}
	}
}
