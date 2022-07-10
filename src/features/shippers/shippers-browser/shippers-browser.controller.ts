import { ShippersService } from './../service/shippers.service';
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
import { ShipperEntity } from 'src/models/shipper.entity';

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
	constructor(public ShippersService: ShippersService) {
		super(ShippersService);
	}

	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of Shippers' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: ShipperEntity })
	findAllV1(): Promise<ShipperEntity[]> {
		return this.findDtoAll();
	}
}
