import { Test, TestingModule } from '@nestjs/testing';
import { EmployeesService } from '../service/employees.service';
import { EmployeesEditorController } from './employees-editor.controller';

describe('EmployeesEditorController', () => {
	let controller: EmployeesEditorController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [EmployeesEditorController],
			providers: [EmployeesService]
		}).compile();

		controller = module.get<EmployeesEditorController>(
			EmployeesEditorController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
