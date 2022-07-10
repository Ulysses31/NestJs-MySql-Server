import { TerritoriesService } from './../service/territories.service';
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
import { TerritoryEntity } from 'src/models/territory.entity';

@Controller('Territories')
//@UseGuards(JwtAuthGuard)
@ApiTags('Territories')
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
export class TerritoriesBrowserController extends BaseBrowserController<TerritoryEntity> {
	constructor(public TerritoriesService: TerritoriesService) {
		super(TerritoriesService);
	}

	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of Territories' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: TerritoryEntity })
	findAllV1(): Promise<TerritoryEntity[]> {
		return this.findDtoAll();
	}
}
