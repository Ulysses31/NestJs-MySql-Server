import { BaseCoreEntity } from './../core/models/base.entity';
import { ShipperEntity } from './shipper.entity';
import { EmployeeEntity } from './employee.entity';
import { CustomersEntity } from './customer.entity';
import { OrderDetailEntity } from './order-detail.entity';
import {
	Column,
	Entity,
	Index,
	JoinColumn,
	ManyToOne,
	OneToMany
} from 'typeorm';

/**
 * OrderEntity entity
 */
@Index('CustomerID', ['customerId'], {})
@Index('CustomersOrders', ['customerId'], {})
@Index('EmployeeID', ['employeeId'], {})
@Index('EmployeesOrders', ['employeeId'], {})
@Index('OrderDate', ['orderDate'], {})
@Index('ShippedDate', ['shippedDate'], {})
@Index('ShippersOrders', ['shipVia'], {})
@Index('ShipPostalCode', ['shipPostalCode'], {})
@Entity({ name: 'orders', schema: 'northwind' })
export class OrderEntity extends BaseCoreEntity {
	@Column('int', { primary: true, name: 'OrderID' })
	orderId: number;

	@Column('char', { name: 'CustomerID', nullable: true, length: 5 })
	customerId: string | null;

	@Column('int', { name: 'EmployeeID', nullable: true })
	employeeId: number | null;

	@Column('datetime', { name: 'OrderDate', nullable: true })
	orderDate: Date | null;

	@Column('datetime', { name: 'RequiredDate', nullable: true })
	requiredDate: Date | null;

	@Column('datetime', { name: 'ShippedDate', nullable: true })
	shippedDate: Date | null;

	@Column('int', { name: 'ShipVia', nullable: true })
	shipVia: number | null;

	@Column('decimal', {
		name: 'Freight',
		nullable: true,
		precision: 19,
		scale: 4,
		default: () => "'0.0000'"
	})
	freight: string | null;

	@Column('varchar', { name: 'ShipName', nullable: true, length: 40 })
	shipName: string | null;

	@Column('varchar', {
		name: 'ShipAddress',
		nullable: true,
		length: 60
	})
	shipAddress: string | null;

	@Column('varchar', { name: 'ShipCity', nullable: true, length: 15 })
	shipCity: string | null;

	@Column('varchar', {
		name: 'ShipRegion',
		nullable: true,
		length: 15
	})
	shipRegion: string | null;

	@Column('varchar', {
		name: 'ShipPostalCode',
		nullable: true,
		length: 10
	})
	shipPostalCode: string | null;

	@Column('varchar', {
		name: 'ShipCountry',
		nullable: true,
		length: 15
	})
	shipCountry: string | null;

	@OneToMany(
		() => OrderDetailEntity,
		(orderDetails) => orderDetails.order
	)
	orderDetails: OrderDetailEntity[];

	@ManyToOne(() => CustomersEntity, (customers) => customers.orders, {
		onDelete: 'NO ACTION',
		onUpdate: 'NO ACTION'
	})
	@JoinColumn([
		{ name: 'CustomerID', referencedColumnName: 'customerId' }
	])
	customer: CustomersEntity;

	@ManyToOne(() => EmployeeEntity, (employees) => employees.orders, {
		onDelete: 'NO ACTION',
		onUpdate: 'NO ACTION'
	})
	@JoinColumn([
		{ name: 'EmployeeID', referencedColumnName: 'employeeId' }
	])
	employee: EmployeeEntity;

	@ManyToOne(() => ShipperEntity, (shippers) => shippers.orders, {
		onDelete: 'NO ACTION',
		onUpdate: 'NO ACTION'
	})
	@JoinColumn([
		{ name: 'ShipVia', referencedColumnName: 'shipperId' }
	])
	shipVia2: ShipperEntity;
}
