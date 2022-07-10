import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from '../service/orders.service';
import { OrdersBrowserController } from './orders-browser.controller';

describe('OrdersBrowserController', () => {
	let controller: OrdersBrowserController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [OrdersBrowserController],
			providers: [OrdersService]
		}).compile();

		controller = module.get<OrdersBrowserController>(
			OrdersBrowserController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
