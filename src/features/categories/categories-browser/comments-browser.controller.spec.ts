import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from '../service/categories.service';
import { CategoriesBrowserController } from './comments-browser.controller';

describe('CategoriesBrowserController', () => {
	let controller: CategoriesBrowserController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [CategoriesBrowserController],
			providers: [CategoriesService]
		}).compile();

		controller = module.get<CategoriesBrowserController>(
			CategoriesBrowserController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
