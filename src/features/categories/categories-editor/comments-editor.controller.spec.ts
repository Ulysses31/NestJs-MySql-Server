import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesEditorController } from './comments-editor.controller';

describe('CategoriesEditorController', () => {
	let controller: CategoriesEditorController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [CategoriesEditorController],
			providers: [Categorieservice]
		}).compile();

		controller = module.get<CategoriesEditorController>(
			CategoriesEditorController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
