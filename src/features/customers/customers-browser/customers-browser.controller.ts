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
import { CustomersService } from './../service/customers.service';
import { CustomersEntity } from 'src/models/customer.entity';

/**
 * CustomersBrowserController
 * @extends BaseBrowserController<CustomersEntity>
 */
@Controller('Customers')
//@UseGuards(JwtAuthGuard)
@ApiTags('Customers')
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
export class CustomersBrowserController extends BaseBrowserController<CustomersEntity> {
	constructor(public customersService: CustomersService) {
		super(customersService);
	}

	/**
	 * Find all
	 * @returns Promise<CustomersEntity[]>
	 */
	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of Customers' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: CustomersEntity })
	findAllV1(): Promise<CustomersEntity[]> {
		return this.findDtoAll();
	}
}
