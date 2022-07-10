import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from '../service/orders.service';
import { OrdersEditorController } from './orders-editor.controller';

describe('OrdersEditorController', () => {
	let controller: OrdersEditorController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [OrdersEditorController],
			providers: [OrdersService]
		}).compile();

		controller = module.get<OrdersEditorController>(
			OrdersEditorController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
