import { BaseCoreEntity } from 'src/core/models/base.entity';
import {
	Entity,
	Column,
	OneToMany,
	ManyToMany,
	Index
} from 'typeorm';
import { CustomerDemographicEntity } from './customer-demographic.entity';
import { OrderEntity } from './order.entity';

/**
 * CustomersEntity entity
 */
@Index('City', ['city'], {})
@Index('CompanyName', ['companyName'], {})
@Index('PostalCode', ['postalCode'], {})
@Index('Region', ['region'], {})
@Entity({ name: 'customers', schema: 'northwind' })
export class CustomersEntity extends BaseCoreEntity {
	@Column('varchar', { primary: true, name: 'CustomerID', length: 5 })
	customerId: string;

	@Column('varchar', { name: 'CompanyName', length: 40 })
	companyName: string;

	@Column('varchar', {
		name: 'ContactName',
		nullable: true,
		length: 30
	})
	contactName: string | null;

	@Column('varchar', {
		name: 'ContactTitle',
		nullable: true,
		length: 30
	})
	contactTitle: string | null;

	@Column('varchar', { name: 'Address', nullable: true, length: 60 })
	address: string | null;

	@Column('varchar', { name: 'City', nullable: true, length: 15 })
	city: string | null;

	@Column('varchar', { name: 'Region', nullable: true, length: 15 })
	region: string | null;

	@Column('varchar', {
		name: 'PostalCode',
		nullable: true,
		length: 10
	})
	postalCode: string | null;

	@Column('varchar', { name: 'Country', nullable: true, length: 15 })
	country: string | null;

	@Column('varchar', { name: 'Phone', nullable: true, length: 24 })
	phone: string | null;

	@Column('varchar', { name: 'Fax', nullable: true, length: 24 })
	fax: string | null;

	@ManyToMany(
		() => CustomerDemographicEntity,
		(customerdemographics) => customerdemographics.customers
	)
	customerdemographics: CustomerDemographicEntity[];

	@OneToMany(() => OrderEntity, (orders) => orders.customer)
	orders: OrderEntity[];
}
