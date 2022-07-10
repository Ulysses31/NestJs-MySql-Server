import { Test, TestingModule } from '@nestjs/testing';
import { EmployeesTerritoriesService } from '../service/employees-territories.service';
import { EmployeesTerritoriesEditorController } from './employees-territories-editor.controller';

describe('EmployeesTerritoriesEditorController', () => {
	let controller: EmployeesTerritoriesEditorController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [EmployeesTerritoriesEditorController],
			providers: [EmployeesTerritoriesService]
		}).compile();

		controller = module.get<EmployeesTerritoriesEditorController>(
			EmployeesTerritoriesEditorController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
