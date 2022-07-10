import { Test, TestingModule } from '@nestjs/testing';
import { CustomersService } from '../service/customers.service';
import { CustomersBrowserController } from './customers-browser.controller';

describe('CustomersBrowserController', () => {
	let controller: CustomersBrowserController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [CustomersBrowserController],
			providers: [CustomersService]
		}).compile();

		controller = module.get<CustomersBrowserController>(
			CustomersBrowserController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
