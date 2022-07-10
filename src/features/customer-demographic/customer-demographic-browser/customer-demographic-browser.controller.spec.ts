import { Test, TestingModule } from '@nestjs/testing';
import { CustomerDemographicsService } from '../service/customer-demographic.service';
import { CustomerDemographicsBrowserController } from './customer-demographic-browser.controller';

describe('CustomerDemographicsBrowserController', () => {
	let controller: CustomerDemographicsBrowserController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [CustomerDemographicsBrowserController],
			providers: [CustomerDemographicsService]
		}).compile();

		controller = module.get<CustomerDemographicsBrowserController>(
			CustomerDemographicsBrowserController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
