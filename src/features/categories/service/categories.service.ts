import { CategoriesRepository } from './categories-repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';
import { handleError } from 'src/shared/shared';
import { CategoryEntity } from 'src/models/category.entity';

/**
 * CategoriesService
 * @extends BaseService<CategoryEntity>
 */
@Injectable()
export class CategoriesService extends BaseService<CategoryEntity> {
	constructor(
		@InjectRepository(CategoriesRepository)
		public readonly bsRepo: Repository<CategoryEntity>
	) {
		super(bsRepo);
	}

	/**
	 * Find one
	 * @param id any
	 * @returns Promise<CategoryEntity>
	 */
	async findOne(id: any): Promise<CategoryEntity> {
		try {
			const data = await this.bsRepo.findOneBy({ categoryId: id });
			return await Promise.resolve(data);
		} catch (err) {
			throw handleError(err);
		}
	}
}
