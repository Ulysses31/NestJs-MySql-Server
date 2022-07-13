import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { BaseCoreEntity } from 'src/core/models/base.entity';
import { CustomersEntity } from './customer.entity';

/**
 * CustomerDemographicEntity entity
 */
@Entity('customerdemographics', { schema: 'northwind' })
export class CustomerDemographicEntity extends BaseCoreEntity {
	@Column('char', {
		primary: true,
		name: 'CustomerTypeID',
		length: 10
	})
	customerTypeId: string;

	@Column('longtext', { name: 'CustomerDesc', nullable: true })
	customerDesc: string | null;

	@ManyToMany(
		() => CustomersEntity,
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
	customers: CustomersEntity[];
}
