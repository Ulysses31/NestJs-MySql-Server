import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { EmployeeTerritoryEntity } from 'src/models/employee-territory.entity';
import { EmployeesTerritoriesBrowserController } from './employees-territories-browser/employees-territories-browser.controller';
import { EmployeesTerritoriesEditorController } from './employees-territories-editor/employees-territories-editor.controller';
import { EmployeesTerritoriesRepository } from './service/employees-territories-repository';
import { EmployeesTerritoriesService } from './service/employees-territories.service';
import { EmployeesTerritoriesSubscriber } from './service/employees-territories.subscriber';

@Module({
	imports: [TypeOrmModule.forFeature([EmployeeTerritoryEntity])],
	controllers: [
		EmployeesTerritoriesBrowserController,
		EmployeesTerritoriesEditorController
	],
	providers: [
		EmployeesTerritoriesService,
		EmployeesTerritoriesRepository,
		EmployeesTerritoriesSubscriber
	]
})
export class EmployeeTerritoryModule {}
