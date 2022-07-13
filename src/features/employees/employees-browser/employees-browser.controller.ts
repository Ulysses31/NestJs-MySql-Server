import { EmployeesService } from './../service/employees.service';
import { Controller, Get, Version } from '@nestjs/common';
import { BaseBrowserController } from 'src/core/base-browser-controller';
import {
	ApiTags,
	ApiBadRequestResponse,
	ApiUnauthorizedResponse,
	ApiForbiddenResponse,
	ApiNotFoundResponse,
	ApiNotAcceptableResponse,
	ApiInternalServerErrorResponse,
	ApiProduces,
	ApiOkResponse,
	ApiOperation
} from '@nestjs/swagger';
import { EmployeeEntity } from 'src/models/employee.entity';

/**
 * EmployeesBrowserController
 * @extends BaseBrowserController<EmployeeEntity>
 */
@Controller('Employees')
//@UseGuards(JwtAuthGuard)
@ApiTags('Employees')
//@ApiBearerAuth()
@ApiBadRequestResponse({ description: 'Bad Request' })
@ApiUnauthorizedResponse({ description: 'User not authorized' })
@ApiForbiddenResponse({ description: 'Request is forbidden' })
@ApiNotFoundResponse({ description: 'Request not found' })
@ApiNotAcceptableResponse({
	description: 'Request is not acceptable'
})
@ApiInternalServerErrorResponse({
	description: 'Internal Server Error'
})
export class EmployeesBrowserController extends BaseBrowserController<EmployeeEntity> {
	constructor(public employeesService: EmployeesService) {
		super(employeesService);
	}

	/**
	 * Find all
	 * @returns Promise<EmployeeEntity[]>
	 */
	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of Employees' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: EmployeeEntity })
	findAllV1(): Promise<EmployeeEntity[]> {
		return this.findDtoAll();
	}
}
