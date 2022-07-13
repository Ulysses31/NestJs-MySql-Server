import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { OrderEntity } from 'src/models/order.entity';
import { handleError } from 'src/shared/shared';
import { Repository } from 'typeorm';
import { OrdersRepository } from './orders-repository';

/**
 * OrdersService
 * @extends BaseService<OrderEntity>
 */
@Injectable()
export class OrdersService extends BaseService<OrderEntity> {
	constructor(
		@InjectRepository(OrdersRepository)
		public readonly bsRepo: Repository<OrderEntity>
	) {
		super(bsRepo);
	}

	/**
	 * Find one
	 * @param id any
	 * @returns Promise<OrderEntity>
	 */
	async findOne(id: any): Promise<OrderEntity> {
		try {
			const data = await this.bsRepo.findOneBy({ orderId: id });
			return await Promise.resolve(data);
		} catch (err) {
			throw handleError(err);
		}
	}
}
