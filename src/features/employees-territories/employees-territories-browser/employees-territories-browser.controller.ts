import { EmployeesTerritoriesService } from './../service/employees-territories.service';
import { Controller, Get, UseGuards, Version } from '@nestjs/common';
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
	ApiBearerAuth,
	ApiOperation
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/core/authentication/jwt-auth.guard';
import { EmployeeTerritoryEntity } from 'src/models/employee-territory.entity';

@Controller('EmployeesTerritories')
//@UseGuards(JwtAuthGuard)
@ApiTags('EmployeesTerritories')
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
export class EmployeesTerritoriesBrowserController extends BaseBrowserController<EmployeeTerritoryEntity> {
	constructor(
		public employeesTerritoriesService: EmployeesTerritoriesService
	) {
		super(employeesTerritoriesService);
	}

	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of EmployeesTerritories' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK success',
		type: EmployeeTerritoryEntity
	})
	findAllV1(): Promise<EmployeeTerritoryEntity[]> {
		return this.findDtoAll();
	}
}
