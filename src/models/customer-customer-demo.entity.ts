import { BaseEntity } from './../core/models/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('customercustomerdemo', { schema: 'northwind' })
export class CustomerCustomerDemoEntity extends BaseEntity {
	@Column('char', {
		primary: true,
		name: 'CustomerID',
		length: 5
	})
	customerId: string;

	@Column('char', {
		primary: true,
		name: 'CustomerTypeID',
		length: 10
	})
	customerTypeId: string;
}
