import { Injectable } from '@nestjs/common';
import { OrderEntity } from 'src/models/order.entity';
import { EntityManager, Repository } from 'typeorm';

/**
 * OrdersRepository
 * @extends Repository<OrderEntity>
 */
@Injectable()
export class OrdersRepository<
	OrderEntity
> extends Repository<OrderEntity> {
	constructor(public manager: EntityManager) {
		super(OrderEntity, manager);
	}
}
