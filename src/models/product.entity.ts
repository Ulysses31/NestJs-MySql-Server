import { BaseEntity } from './../core/models/base.entity';
import { SupplierEntity } from './supplier.entity';
import { OrderDetailEntity } from './order-detail.entity';
import {
	Column,
	Entity,
	Index,
	JoinColumn,
	ManyToOne,
	OneToMany
} from 'typeorm';
import { CategoryEntity } from './category.entity';

@Index('FK_Products_Categories', ['categoryId'], {})
@Index('FK_Products_Suppliers', ['supplierId'], {})
@Entity({ name: 'products', schema: 'northwind' })
export class ProductEntity extends BaseEntity {
	@Column('int', { primary: true, name: 'ProductID' })
	productId: number;

	@Column('varchar', { name: 'ProductName', length: 40 })
	productName: string;

	@Column('int', { name: 'SupplierID', nullable: true })
	supplierId: number | null;

	@Column('int', { name: 'CategoryID', nullable: true })
	categoryId: number | null;

	@Column('varchar', {
		name: 'QuantityPerUnit',
		nullable: true,
		length: 20
	})
	quantityPerUnit: string | null;

	@Column('decimal', {
		name: 'UnitPrice',
		nullable: true,
		precision: 19,
		scale: 4,
		default: () => "'0.0000'"
	})
	unitPrice: string | null;

	@Column('smallint', {
		name: 'UnitsInStock',
		nullable: true,
		default: () => "'0'"
	})
	unitsInStock: number | null;

	@Column('smallint', {
		name: 'UnitsOnOrder',
		nullable: true,
		default: () => "'0'"
	})
	unitsOnOrder: number | null;

	@Column('smallint', {
		name: 'ReorderLevel',
		nullable: true,
		default: () => "'0'"
	})
	reorderLevel: number | null;

	@Column('tinyint', {
		name: 'Discontinued',
		width: 1,
		default: () => "'0'"
	})
	discontinued: boolean;

	@OneToMany(
		() => OrderDetailEntity,
		(orderDetails) => orderDetails.product
	)
	orderDetails: OrderDetailEntity[];

	@ManyToOne(
		() => CategoryEntity,
		(categories) => categories.products,
		{
			onDelete: 'NO ACTION',
			onUpdate: 'NO ACTION'
		}
	)
	@JoinColumn([
		{ name: 'CategoryID', referencedColumnName: 'categoryId' }
	])
	category: CategoryEntity;

	@ManyToOne(
		() => SupplierEntity,
		(suppliers) => suppliers.products,
		{
			onDelete: 'NO ACTION',
			onUpdate: 'NO ACTION'
		}
	)
	@JoinColumn([
		{ name: 'SupplierID', referencedColumnName: 'supplierId' }
	])
	supplier: SupplierEntity;
}
