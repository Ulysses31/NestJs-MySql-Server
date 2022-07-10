import { Test, TestingModule } from '@nestjs/testing';
import { TerritoriesService } from '../service/territories.service';
import { TerritoriesBrowserController } from './territories-browser.controller';

describe('TerritoriesBrowserController', () => {
	let controller: TerritoriesBrowserController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [TerritoriesBrowserController],
			providers: [TerritoriesService]
		}).compile();

		controller = module.get<TerritoriesBrowserController>(
			TerritoriesBrowserController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
