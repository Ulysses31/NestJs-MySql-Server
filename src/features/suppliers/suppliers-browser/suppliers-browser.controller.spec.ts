import { Test, TestingModule } from '@nestjs/testing';
import { SuppliersService } from '../service/suppliers.service';
import { SuppliersBrowserController } from './suppliers-browser.controller';

describe('SuppliersBrowserController', () => {
	let controller: SuppliersBrowserController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [SuppliersBrowserController],
			providers: [SuppliersService]
		}).compile();

		controller = module.get<SuppliersBrowserController>(
			SuppliersBrowserController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
