import { CategoryEntity } from './../../models/Category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CategoriesSubscriber } from './service/categories.subscriber';
import { CategoriesBrowserController } from './categories-browser/comments-browser.controller';
import { CategoriesEditorController } from './categories-editor/comments-editor.controller';
import { CategoriesService } from './service/categories.service';
import { CategoriesRepository } from './service/categories-repository';

@Module({
	imports: [TypeOrmModule.forFeature([CategoryEntity])],
	controllers: [
		CategoriesBrowserController,
		CategoriesEditorController
	],
	providers: [
		CategoriesService,
		CategoriesRepository,
		CategoriesSubscriber
	]
})
export class CategoryModule {}
