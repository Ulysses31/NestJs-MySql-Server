import { Test, TestingModule } from '@nestjs/testing';
import { ShippersService } from '../service/shippers.service';
import { ShippersBrowserController } from './shippers-browser.controller';

describe('ShippersBrowserController', () => {
	let controller: ShippersBrowserController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [ShippersBrowserController],
			providers: [ShippersService]
		}).compile();

		controller = module.get<ShippersBrowserController>(
			ShippersBrowserController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
