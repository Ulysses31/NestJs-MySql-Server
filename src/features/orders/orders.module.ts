import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OrderEntity } from 'src/models/order.entity';
import { OrdersBrowserController } from './orders-browser/orders-browser.controller';
import { OrdersEditorController } from './orders-editor/orders-editor.controller';
import { OrdersRepository } from './service/orders-repository';
import { OrdersService } from './service/orders.service';
import { OrdersSubscriber } from './service/orders.subscriber';

@Module({
	imports: [TypeOrmModule.forFeature([OrderEntity])],
	controllers: [OrdersBrowserController, OrdersEditorController],
	providers: [OrdersService, OrdersRepository, OrdersSubscriber]
})
export class OrderModule {}
