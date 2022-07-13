import { ProductEntity } from './product.entity';
import { Column, Entity, Index, OneToMany } from 'typeorm';
import { BaseCoreEntity } from 'src/core/models/base.entity';

/**
 * CategoryEntity entity
 */
@Index('CategoryName', ['categoryName'], {})
@Entity({ name: 'categories', schema: 'northwind' })
export class CategoryEntity extends BaseCoreEntity {
	@Column('int', {
		primary: true,
		name: 'CategoryID',
		generated: 'increment'
	})
	categoryId: number;

	@Column('varchar', { name: 'CategoryName', length: 15 })
	categoryName: string;

	@Column('longtext', { name: 'Description', nullable: true })
	description: string | null;

	// @Column('longblob', { name: 'Picture', nullable: true })
	// picture: Buffer | null;

	@OneToMany(() => ProductEntity, (products) => products.category)
	products: ProductEntity[];
}
