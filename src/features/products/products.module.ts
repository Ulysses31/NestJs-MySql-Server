import { CategoryEntity } from 'src/models/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProductsBrowserController } from './products-browser/products-browser.controller';
import { ProductsEditorController } from './products-editor/products-editor.controller';
import { ProductsRepository } from './service/products-repository';
import { ProductsSubscriber } from './service/products.subscriber';
import { ProductsService } from './service/products.service';
import { ProductEntity } from 'src/models/product.entity';

@Module({
	imports: [
		TypeOrmModule.forFeature([ProductEntity, CategoryEntity])
	],
	controllers: [ProductsBrowserController, ProductsEditorController],
	providers: [ProductsService, ProductsRepository, ProductsSubscriber]
})
export class ProductModule {}
