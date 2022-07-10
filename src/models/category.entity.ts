import { ProductEntity } from './product.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'categories', schema: 'northwind' })
export class CategoryEntity {
	@Column('int', { primary: true, name: 'CategoryID' })
	categoryId: number;

	@Column('varchar', { name: 'CategoryName', length: 15 })
	categoryName: string;

	@Column('longtext', { name: 'Description', nullable: true })
	description: string | null;

	@Column('longblob', { name: 'Picture', nullable: true })
	picture: Buffer | null;

	@OneToMany(() => ProductEntity, (products) => products.category)
	products: ProductEntity[];
}
