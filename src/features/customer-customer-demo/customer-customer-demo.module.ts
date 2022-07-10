import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CustomerCustomerDemoEntity } from 'src/models/customer-customer-demo.entity';
import { CustomerCustomerDemosBrowserController } from './customer-customer-demo-browser/customer-customer-demo-browser.controller';
import { CustomerCustomerDemosEditorController } from './customer-customer-demo-editor/customer-customer-demo-editor.controller';
import { CustomerCustomerDemosRepository } from './service/customer-customer-demo-repository';
import { CustomerCustomerDemosService } from './service/customer-customer-demo.service';
import { CustomerCustomerDemosSubscriber } from './service/customer-customer-demo.subscriber';

@Module({
	imports: [TypeOrmModule.forFeature([CustomerCustomerDemoEntity])],
	controllers: [
		CustomerCustomerDemosBrowserController,
		CustomerCustomerDemosEditorController
	],
	providers: [
		CustomerCustomerDemosService,
		CustomerCustomerDemosRepository,
		CustomerCustomerDemosSubscriber
	]
})
export class CustomerCustomerDemoModule {}
