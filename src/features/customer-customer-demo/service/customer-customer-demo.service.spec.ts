import { Test, TestingModule } from '@nestjs/testing';
import { CustomerCustomerDemosService } from './customer-customer-demo.service';

describe('CustomerCustomerDemosService', () => {
	let service: CustomerCustomerDemosService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [CustomerCustomerDemosService]
		}).compile();

		service = module.get<CustomerCustomerDemosService>(
			CustomerCustomerDemosService
		);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
