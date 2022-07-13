import { ProductEntity } from './product.entity';
import { Column, Entity, Index, OneToMany } from 'typeorm';
import { BaseCoreEntity } from 'src/core/models/base.entity';

/**
 * SupplierEntity entity
 */
@Index('CompanyName', ['companyName'], {})
@Index('PostalCode', ['postalCode'], {})
@Entity({ name: 'suppliers', schema: 'northwind' })
export class SupplierEntity extends BaseCoreEntity {
	@Column('int', { primary: true, name: 'SupplierID' })
	supplierId: number;

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

	@Column('longtext', { name: 'HomePage', nullable: true })
	homePage: string | null;

	@OneToMany(() => ProductEntity, (products) => products.supplier)
	products: ProductEntity[];
}
