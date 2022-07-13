import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { ProductEntity } from 'src/models/product.entity';
import { handleError } from 'src/shared/shared';
import { Repository } from 'typeorm';
import { ProductsRepository } from './products-repository';

/**
 * ProductsService
 * @extends BaseService<ProductEntity>
 */
@Injectable()
export class ProductsService extends BaseService<ProductEntity> {
	constructor(
		@InjectRepository(ProductsRepository)
		public readonly bsRepo: Repository<ProductEntity>
	) {
		super(bsRepo);
	}

	/**
	 * Find by id
	 * @param id any
	 * @returns Promise<ProductEntity>
	 */
	async findOne(id: any): Promise<ProductEntity> {
		try {
			const data = await this.bsRepo.findOneBy({ productId: id });
			return await Promise.resolve(data);
		} catch (err) {
			throw handleError(err);
		}
	}
}
