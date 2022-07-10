import { Test, TestingModule } from '@nestjs/testing';
import { EmployeesTerritoriesService } from '../service/employees-territories.service';
import { EmployeesTerritoriesBrowserController } from './employees-territories-browser.controller';

describe('EmployeesTerritoriesBrowserController', () => {
	let controller: EmployeesTerritoriesBrowserController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [EmployeesTerritoriesBrowserController],
			providers: [EmployeesTerritoriesService]
		}).compile();

		controller = module.get<EmployeesTerritoriesBrowserController>(
			EmployeesTerritoriesBrowserController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
