import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from '../service/products.service';
import { ProductsEditorController } from './products-editor.controller';

describe('ProductsEditorController', () => {
	let controller: ProductsEditorController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [ProductsEditorController],
			providers: [ProductsService]
		}).compile();

		controller = module.get<ProductsEditorController>(
			ProductsEditorController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
