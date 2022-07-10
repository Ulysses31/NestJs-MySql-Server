import { ProductEntity } from './../../models/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SupplierEntity } from 'src/models/supplier.entity';
import { SuppliersRepository } from './service/suppliers-repository';
import { SuppliersService } from './service/suppliers.service';
import { SuppliersSubscriber } from './service/suppliers.subscriber';
import { SuppliersBrowserController } from './suppliers-browser/suppliers-browser.controller';
import { SuppliersEditorController } from './suppliers-editor/suppliers-editor.controller';

@Module({
	imports: [
		TypeOrmModule.forFeature([SupplierEntity, ProductEntity])
	],
	controllers: [
		SuppliersBrowserController,
		SuppliersEditorController
	],
	providers: [
		SuppliersService,
		SuppliersRepository,
		SuppliersSubscriber
	]
})
export class SupplierModule {}
