import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { ProductEntity } from 'src/models/product.entity';
import { Repository } from 'typeorm';
import { ProductsRepository } from './products-repository';

@Injectable()
export class ProductsService extends BaseService<ProductEntity> {
	constructor(
		@InjectRepository(ProductsRepository)
		public readonly bsRepo: Repository<ProductEntity>
	) {
		super(bsRepo);
	}
}
