import { Test, TestingModule } from '@nestjs/testing';
import { EmployeesTerritoriesService } from './employees-territories.service';

describe('EmployeesTerritoriesService', () => {
	let service: EmployeesTerritoriesService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [EmployeesTerritoriesService]
		}).compile();

		service = module.get<EmployeesTerritoriesService>(
			EmployeesTerritoriesService
		);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
