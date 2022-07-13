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
import { CustomerDemographicEntity } from 'src/models/customer-demographic.entity';
import { CustomerDemographicsService } from '../service/customer-demographic.service';

/**
 * CustomerDemographicsBrowserController
 * @extends BaseBrowserController<CustomerDemographicEntity>
 */
@Controller('CustomerDemographics')
//@UseGuards(JwtAuthGuard)
@ApiTags('CustomerDemographics')
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
export class CustomerDemographicsBrowserController extends BaseBrowserController<CustomerDemographicEntity> {
	constructor(
		public customerDemographicsService: CustomerDemographicsService
	) {
		super(customerDemographicsService);
	}

	/**
	 * Find all
	 * @returns Promise<CustomerDemographicEntity[]>
	 */
	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of CustomerDemographics' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK success',
		type: CustomerDemographicEntity
	})
	findAllV1(): Promise<CustomerDemographicEntity[]> {
		return this.findDtoAll();
	}
}
