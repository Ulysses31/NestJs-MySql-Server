import { OrderEntity } from './order.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { BaseCoreEntity } from 'src/core/models/base.entity';

/**
 * ShipperEntity entity
 */
@Entity({ name: 'shippers', schema: 'northwind' })
export class ShipperEntity extends BaseCoreEntity {
	@Column('int', { primary: true, name: 'ShipperID' })
	shipperId: number;

	@Column('varchar', { name: 'CompanyName', length: 40 })
	companyName: string;

	@Column('varchar', { name: 'Phone', nullable: true, length: 24 })
	phone: string | null;

	@OneToMany(() => OrderEntity, (orders) => orders.shipVia2)
	orders: OrderEntity[];
}
