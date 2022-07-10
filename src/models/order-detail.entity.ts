import { BaseEntity } from './../core/models/base.entity';
import { ProductEntity } from './product.entity';
import { OrderEntity } from './order.entity';
import {
	Column,
	Entity,
	Index,
	JoinColumn,
	ManyToOne
} from 'typeorm';

@Index('FK_Order_Details_Products', ['productId'], {})
@Entity({ name: 'order details', schema: 'northwind' })
export class OrderDetailEntity extends BaseEntity {
	@Column('int', { primary: true, name: 'OrderID' })
	orderId: number;

	@Column('int', { primary: true, name: 'ProductID' })
	productId: number;

	@Column('decimal', {
		name: 'UnitPrice',
		precision: 19,
		scale: 4,
		default: () => "'0.0000'"
	})
	unitPrice: string;

	@Column('smallint', { name: 'Quantity', default: () => "'1'" })
	quantity: number;

	@Column('float', {
		name: 'Discount',
		precision: 24,
		scale: 0,
		default: () => "'0'"
	})
	discount: number;

	@ManyToOne(() => OrderEntity, (orders) => orders.orderDetails, {
		onDelete: 'NO ACTION',
		onUpdate: 'NO ACTION'
	})
	@JoinColumn([{ name: 'OrderID', referencedColumnName: 'orderId' }])
	order: OrderEntity;

	@ManyToOne(
		() => ProductEntity,
		(products) => products.orderDetails,
		{
			onDelete: 'NO ACTION',
			onUpdate: 'NO ACTION'
		}
	)
	@JoinColumn([
		{ name: 'ProductID', referencedColumnName: 'productId' }
	])
	product: ProductEntity;
}
