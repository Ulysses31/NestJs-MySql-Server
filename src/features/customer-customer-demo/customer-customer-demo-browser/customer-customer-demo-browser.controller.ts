import { CustomerCustomerDemosService } from './../service/customer-customer-demo.service';
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
import { CustomerCustomerDemoEntity } from 'src/models/customer-customer-demo.entity';

/**
 * CustomerCustomerDemosBrowserController
 * @extends BaseBrowserController<CustomerCustomerDemoEntity>
 */
@Controller('CustomerCustomerDemos')
//@UseGuards(JwtAuthGuard)
@ApiTags('CustomerCustomerDemos')
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
export class CustomerCustomerDemosBrowserController extends BaseBrowserController<CustomerCustomerDemoEntity> {
	constructor(
		public customerCustomerDemosService: CustomerCustomerDemosService
	) {
		super(customerCustomerDemosService);
	}

	/**
	 * Find all
	 * @returns Promise<CustomerCustomerDemoEntity[]>
	 */
	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of CustomerCustomerDemos' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK success',
		type: CustomerCustomerDemoEntity
	})
	findAllV1(): Promise<CustomerCustomerDemoEntity[]> {
		return this.findDtoAll();
	}
}
