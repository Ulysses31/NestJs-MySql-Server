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
import { OrderDetailEntity } from 'src/models/order-detail.entity';
import { OrderDetailsService } from '../service/order-details.service';

/**
 * OrderDetailsBrowserController
 * @extends BaseBrowserController<OrderDetailEntity>
 */
@Controller('OrderDetails')
//@UseGuards(JwtAuthGuard)
@ApiTags('OrderDetails')
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
export class OrderDetailsBrowserController extends BaseBrowserController<OrderDetailEntity> {
	constructor(public orderDetailsService: OrderDetailsService) {
		super(orderDetailsService);
	}

	/**
	 * Find all
	 * @returns Promise<OrderDetailEntity[]>
	 */
	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of OrderDetails' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK success',
		type: OrderDetailEntity
	})
	findAllV1(): Promise<OrderDetailEntity[]> {
		return this.findDtoAll();
	}
}
