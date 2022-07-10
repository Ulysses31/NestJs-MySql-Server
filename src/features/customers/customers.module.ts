import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from 'src/models/customer.entity';
import { CustomersBrowserController } from './customers-browser/customers-browser.controller';
import { CustomersEditorController } from './customers-editor/customers-editor.controller';
import { CustomersRepository } from './service/customers-repository';
import { CustomersService } from './service/Customers.service';
import { CustomersSubscriber } from './service/customers.subscriber';

@Module({
	imports: [TypeOrmModule.forFeature([CustomerEntity])],
	controllers: [
		CustomersBrowserController,
		CustomersEditorController
	],
	providers: [
		CustomersService,
		CustomersRepository,
		CustomersSubscriber
	]
})
export class CustomerModule {}
