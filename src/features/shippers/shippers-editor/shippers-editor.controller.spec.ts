import { Test, TestingModule } from '@nestjs/testing';
import { ShippersService } from '../service/shippers.service';
import { ShippersEditorController } from './shippers-editor.controller';

describe('ShippersEditorController', () => {
	let controller: ShippersEditorController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [ShippersEditorController],
			providers: [ShippersService]
		}).compile();

		controller = module.get<ShippersEditorController>(
			ShippersEditorController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
