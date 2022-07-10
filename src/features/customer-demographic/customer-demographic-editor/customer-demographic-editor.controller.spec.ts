import { Test, TestingModule } from '@nestjs/testing';
import { CustomerDemographicsService } from '../service/customer-demographic.service';
import { CustomerDemographicsEditorController } from './customer-demographic-editor.controller';

describe('CustomerDemographicsEditorController', () => {
	let controller: CustomerDemographicsEditorController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [CustomerDemographicsEditorController],
			providers: [CustomerDemographicsService]
		}).compile();

		controller = module.get<CustomerDemographicsEditorController>(
			CustomerDemographicsEditorController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
