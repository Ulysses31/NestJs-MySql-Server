import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { EmployeeEntity } from 'src/models/employee.entity';
import { EmployeesBrowserController } from './employees-browser/employees-browser.controller';
import { EmployeesEditorController } from './employees-editor/employees-editor.controller';
import { EmployeesRepository } from './service/employees-repository';
import { EmployeesService } from './service/employees.service';
import { EmployeesSubscriber } from './service/employees.subscriber';

@Module({
	imports: [TypeOrmModule.forFeature([EmployeeEntity])],
	controllers: [
		EmployeesBrowserController,
		EmployeesEditorController
	],
	providers: [
		EmployeesService,
		EmployeesRepository,
		EmployeesSubscriber
	]
})
export class EmployeesModule {}
