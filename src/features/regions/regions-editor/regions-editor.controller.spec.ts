import { Test, TestingModule } from '@nestjs/testing';
import { RegionsService } from '../service/regions.service';
import { RegionsEditorController } from './regions-editor.controller';

describe('RegionsEditorController', () => {
	let controller: RegionsEditorController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [RegionsEditorController],
			providers: [RegionsService]
		}).compile();

		controller = module.get<RegionsEditorController>(
			RegionsEditorController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
