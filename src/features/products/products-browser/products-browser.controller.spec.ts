import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from '../service/Products.service';
import { ProductsBrowserController } from './products-browser.controller';

describe('ProductsBrowserController', () => {
	let controller: ProductsBrowserController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [ProductsBrowserController],
			providers: [ProductsService]
		}).compile();

		controller = module.get<ProductsBrowserController>(
			ProductsBrowserController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
