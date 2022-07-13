import { CustomersEntity } from 'src/models/customer.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersBrowserController } from './customers-browser/customers-browser.controller';
import { CustomersEditorController } from './customers-editor/customers-editor.controller';
import { CustomersRepository } from './service/customers-repository';
import { CustomersService } from './service/customers.service';
import { CustomersSubscriber } from './service/customers.subscriber';

@Module({
	imports: [TypeOrmModule.forFeature([CustomersEntity])],
	controllers: [
		CustomersBrowserController,
		CustomersEditorController
	],
	providers: [
		Object,
		CustomersService,
		CustomersRepository,
		CustomersSubscriber
	]
})
export class CustomerModule {}
