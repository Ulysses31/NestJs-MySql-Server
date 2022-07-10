import { CustomerEntity } from './customer.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity('customerdemographics', { schema: 'northwind' })
export class CustomerDemographicEntity {
	@Column('char', {
		primary: true,
		name: 'CustomerTypeID',
		length: 10
	})
	customerTypeId: string;

	@Column('longtext', { name: 'CustomerDesc', nullable: true })
	customerDesc: string | null;

	@ManyToMany(
		() => CustomerEntity,
		(customers) => customers.customerdemographics
	)
	@JoinTable({
		name: 'customercustomerdemo',
		joinColumns: [
			{
				name: 'CustomerTypeID',
				referencedColumnName: 'customerTypeId'
			}
		],
		inverseJoinColumns: [
			{ name: 'CustomerID', referencedColumnName: 'customerId' }
		],
		schema: 'northwind'
	})
	customers: CustomerEntity[];
}
