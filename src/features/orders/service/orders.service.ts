import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { OrderEntity } from 'src/models/order.entity';
import { Repository } from 'typeorm';
import { OrdersRepository } from './orders-repository';

@Injectable()
export class OrdersService extends BaseService<OrderEntity> {
	constructor(
		@InjectRepository(OrdersRepository)
		public readonly bsRepo: Repository<OrderEntity>
	) {
		super(bsRepo);
	}
}
