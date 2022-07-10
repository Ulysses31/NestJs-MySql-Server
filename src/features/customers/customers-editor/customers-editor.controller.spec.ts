import { Test, TestingModule } from '@nestjs/testing';
import { CustomersService } from '../service/customers.service';
import { CustomersEditorController } from './customers-editor.controller';

describe('CustomersEditorController', () => {
	let controller: CustomersEditorController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [CustomersEditorController],
			providers: [CustomersService]
		}).compile();

		controller = module.get<CustomersEditorController>(
			CustomersEditorController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
