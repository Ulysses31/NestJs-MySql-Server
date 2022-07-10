import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ShipperEntity } from 'src/models/shipper.entity';
import { ShippersRepository } from './service/shippers-repository';
import { ShippersService } from './service/shippers.service';
import { ShippersSubscriber } from './service/shippers.subscriber';
import { ShippersBrowserController } from './shippers-browser/shippers-browser.controller';
import { ShippersEditorController } from './shippers-editor/shippers-editor.controller';

@Module({
	imports: [TypeOrmModule.forFeature([ShipperEntity])],
	controllers: [ShippersBrowserController, ShippersEditorController],
	providers: [ShippersService, ShippersRepository, ShippersSubscriber]
})
export class ShipperModule {}
