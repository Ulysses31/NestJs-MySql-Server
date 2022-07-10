import { Test, TestingModule } from '@nestjs/testing';
import { SuppliersService } from '../service/suppliers.service';
import { SuppliersEditorController } from './suppliers-editor.controller';

describe('SuppliersEditorController', () => {
	let controller: SuppliersEditorController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [SuppliersEditorController],
			providers: [SuppliersService]
		}).compile();

		controller = module.get<SuppliersEditorController>(
			SuppliersEditorController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
