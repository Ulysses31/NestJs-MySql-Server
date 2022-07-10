import { Test, TestingModule } from '@nestjs/testing';
import { OrderDetailsService } from '../service/order-details.service';
import { OrderDetailsEditorController } from './products-editor.controller';

describe('OrderDetailsEditorController', () => {
	let controller: OrderDetailsEditorController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [OrderDetailsEditorController],
			providers: [OrderDetailsService]
		}).compile();

		controller = module.get<OrderDetailsEditorController>(
			OrderDetailsEditorController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
