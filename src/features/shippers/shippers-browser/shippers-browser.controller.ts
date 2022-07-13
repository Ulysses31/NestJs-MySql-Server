import { ShippersService } from './../service/shippers.service';
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
import { ShipperEntity } from 'src/models/shipper.entity';

/**
 * ShippersBrowserController
 * @extends BaseBrowserController<ShipperEntity>
 */
@Controller('Shippers')
//@UseGuards(JwtAuthGuard)
@ApiTags('Shippers')
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
export class ShippersBrowserController extends BaseBrowserController<ShipperEntity> {
	constructor(public shippersService: ShippersService) {
		super(shippersService);
	}

	/**
	 * Find all
	 * @returns Promise<ShipperEntity[]>
	 */
	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of Shippers' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: ShipperEntity })
	findAllV1(): Promise<ShipperEntity[]> {
		return this.findDtoAll();
	}
}
