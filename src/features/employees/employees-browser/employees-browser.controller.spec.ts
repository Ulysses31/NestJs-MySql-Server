import { Test, TestingModule } from '@nestjs/testing';
import { EmployeesService } from '../service/employees.service';
import { EmployeesBrowserController } from './employees-browser.controller';

describe('EmployeesBrowserController', () => {
	let controller: EmployeesBrowserController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [EmployeesBrowserController],
			providers: [EmployeesService]
		}).compile();

		controller = module.get<EmployeesBrowserController>(
			EmployeesBrowserController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
