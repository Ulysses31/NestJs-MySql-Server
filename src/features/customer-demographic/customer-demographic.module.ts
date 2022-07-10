import { CustomerEntity } from './../../models/customer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CustomerDemographicEntity } from 'src/models/customer-demographic.entity';
import { CustomerDemographicsBrowserController } from './customer-demographic-browser/customer-demographic-browser.controller';
import { CustomerDemographicsEditorController } from './customer-demographic-editor/customer-demographic-editor.controller';
import { CustomerDemographicsRepository } from './service/customer-demographic-repository';
import { CustomerDemographicsService } from './service/customer-demographic.service';
import { CustomerDemographicsSubscriber } from './service/customer-demographic.subscriber';

@Module({
	imports: [
		TypeOrmModule.forFeature([
			CustomerDemographicEntity,
			CustomerEntity
		])
	],
	controllers: [
		CustomerDemographicsBrowserController,
		CustomerDemographicsEditorController
	],
	providers: [
		CustomerDemographicsService,
		CustomerDemographicsRepository,
		CustomerDemographicsSubscriber
	]
})
export class CustomerDemographicModule {}
