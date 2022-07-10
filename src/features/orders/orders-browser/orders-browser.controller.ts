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
import { OrderEntity } from 'src/models/order.entity';
import { OrdersService } from '../service/orders.service';

@Controller('Orders')
//@UseGuards(JwtAuthGuard)
@ApiTags('Orders')
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
export class OrdersBrowserController extends BaseBrowserController<OrderEntity> {
	constructor(public ordersService: OrdersService) {
		super(ordersService);
	}

	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of Orders' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: OrderEntity })
	findAllV1(): Promise<OrderEntity[]> {
		return this.findDtoAll();
	}
}
