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
import { CustomersService } from '../service/Customers.service';
import { CustomerEntity } from 'src/models/Customer.entity';

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
export class CustomersBrowserController extends BaseBrowserController<CustomerEntity> {
	constructor(public customersService: CustomersService) {
		super(customersService);
	}

	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of Customers' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: CustomerEntity })
	findAllV1(): Promise<CustomerEntity[]> {
		return this.findDtoAll();
	}
}
