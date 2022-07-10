import { Test, TestingModule } from '@nestjs/testing';
import { CustomerCustomerDemosService } from '../service/customer-customer-demo.service';
import { CustomerCustomerDemosBrowserController } from './customer-customer-demo-browser.controller';

describe('CustomerCustomerDemosBrowserController', () => {
	let controller: CustomerCustomerDemosBrowserController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [CustomerCustomerDemosBrowserController],
			providers: [CustomerCustomerDemosService]
		}).compile();

		controller = module.get<CustomerCustomerDemosBrowserController>(
			CustomerCustomerDemosBrowserController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
