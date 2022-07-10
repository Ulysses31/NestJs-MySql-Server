import { Test, TestingModule } from '@nestjs/testing';
import { TerritoriesService } from '../service/territories.service';
import { TerritoriesEditorController } from './territories-editor.controller';

describe('TerritoriesEditorController', () => {
	let controller: TerritoriesEditorController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [TerritoriesEditorController],
			providers: [TerritoriesService]
		}).compile();

		controller = module.get<TerritoriesEditorController>(
			TerritoriesEditorController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
