import { RegionsService } from './../service/regions.service';
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
import { RegionEntity } from 'src/models/region.entity';

/**
 * RegionsBrowserController
 * @extends BaseBrowserController<RegionEntity>
 */
@Controller('Regions')
//@UseGuards(JwtAuthGuard)
@ApiTags('Regions')
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
export class RegionsBrowserController extends BaseBrowserController<RegionEntity> {
	constructor(public regionsService: RegionsService) {
		super(regionsService);
	}

	/**
	 * Find all
	 * @returns Promise<RegionEntity[]>
	 */
	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of Regions' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: RegionEntity })
	findAllV1(): Promise<RegionEntity[]> {
		return this.findDtoAll();
	}
}
