import { Test, TestingModule } from '@nestjs/testing';
import { OrderDetailsService } from '../service/order-details.service';
import { OrderDetailsBrowserController } from './products-browser.controller';

describe('OrderDetailsBrowserController', () => {
	let controller: OrderDetailsBrowserController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [OrderDetailsBrowserController],
			providers: [OrderDetailsService]
		}).compile();

		controller = module.get<OrderDetailsBrowserController>(
			OrderDetailsBrowserController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
