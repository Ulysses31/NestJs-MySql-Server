import { Injectable } from '@nestjs/common';
import { ProductEntity } from 'src/models/product.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class ProductsRepository<
	ProductEntity
> extends Repository<ProductEntity> {
	constructor(public manager: EntityManager) {
		super(ProductEntity, manager);
	}
}
