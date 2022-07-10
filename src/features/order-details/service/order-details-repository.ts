import { Injectable } from '@nestjs/common';
import { OrderDetailEntity } from 'src/models/order-detail.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class OrderDetailsRepository<
	OrderDetailEntity
> extends Repository<OrderDetailEntity> {
	constructor(public manager: EntityManager) {
		super(OrderDetailEntity, manager);
	}
}
