import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { OrderDetailEntity } from 'src/models/order-detail.entity';
import { Repository } from 'typeorm';
import { OrderDetailsRepository } from './order-details-repository';

@Injectable()
export class OrderDetailsService extends BaseService<OrderDetailEntity> {
	constructor(
		@InjectRepository(OrderDetailsRepository)
		public readonly bsRepo: Repository<OrderDetailEntity>
	) {
		super(bsRepo);
	}
}
