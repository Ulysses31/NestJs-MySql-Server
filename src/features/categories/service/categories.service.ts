import { CategoriesRepository } from './categories-repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { CategoryEntity } from 'src/models/Category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService extends BaseService<CategoryEntity> {
	constructor(
		@InjectRepository(CategoriesRepository)
		public readonly bsRepo: Repository<CategoryEntity>
	) {
		super(bsRepo);
	}
}
