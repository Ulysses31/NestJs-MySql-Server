import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OrderDetailsRepository } from './service/order-details-repository';
import { OrderDetailsService } from './service/order-details.service';
import { OrderDetailsSubscriber } from './service/order-details.subscriber';
import { OrderDetailEntity } from 'src/models/order-detail.entity';
import { OrderDetailsBrowserController } from './order-details-browser/products-browser.controller';
import { OrderDetailsEditorController } from './order-details-editor/products-editor.controller';

@Module({
	imports: [TypeOrmModule.forFeature([OrderDetailEntity])],
	controllers: [
		OrderDetailsBrowserController,
		OrderDetailsEditorController
	],
	providers: [
		OrderDetailsService,
		OrderDetailsRepository,
		OrderDetailsSubscriber
	]
})
export class OrderDetailModule {}
