import { Test, TestingModule } from '@nestjs/testing';
import { RegionsService } from '../service/regions.service';
import { RegionsBrowserController } from './regions-browser.controller';

describe('RegionsBrowserController', () => {
	let controller: RegionsBrowserController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [RegionsBrowserController],
			providers: [RegionsService]
		}).compile();

		controller = module.get<RegionsBrowserController>(
			RegionsBrowserController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
