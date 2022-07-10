import { Injectable } from '@nestjs/common';
import { CategoryEntity } from 'src/models/category.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class CategoriesRepository<
	CategoryEntity
> extends Repository<CategoryEntity> {
	constructor(public manager: EntityManager) {
		super(CategoryEntity, manager);
	}
}
