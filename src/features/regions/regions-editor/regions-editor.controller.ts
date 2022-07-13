import {
	Body,
	Controller,
	Delete,
	Get,
	HttpStatus,
	Param,
	ParseIntPipe,
	Post,
	Put,
	Version
} from '@nestjs/common';
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
	ApiBody,
	ApiConsumes,
	ApiCreatedResponse,
	ApiOperation
} from '@nestjs/swagger';
import { InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import { RegionEntity } from 'src/models/region.entity';
import { RegionsService } from '../service/regions.service';
import { BaseEditorController } from 'src/core/base-editor-controller';

/**
 * RegionsEditorController
 * @extends BaseEditorController<RegionEntity>
 */
@Controller('Regions')
// @UseGuards(JwtAuthGuard)
@ApiTags('Regions')
// @ApiBearerAuth()
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
export class RegionsEditorController extends BaseEditorController<RegionEntity> {
	constructor(public Regionservice: RegionsService) {
		super(Regionservice);
	}

	/**
	 * Find by id
	 * @param id string
	 * @returns Promise<RegionEntity>
	 */
	@Get(':id')
	@Version('1')
	@ApiOperation({ description: 'Get Region by id' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: RegionEntity })
	findByIdV1(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string
	): Promise<RegionEntity> {
		return this.findDtoById(id);
	}

	/**
	 * New dto
	 * @param dto RegionEntity
	 * @returns Promise<InsertResult>
	 */
	@Post()
	@Version('1')
	@ApiOperation({ description: 'Insert new Region' })
	@ApiBody({ type: RegionEntity })
	@ApiProduces('application/json', 'application/xml')
	@ApiConsumes('application/json', 'application/xml')
	@ApiCreatedResponse({
		description: 'The record has been successfully created',
		type: RegionEntity
	})
	newDtoV1(@Body() dto: RegionEntity): Promise<InsertResult> {
		return this.insertNewDto(dto);
	}

	/**
	 * Update dto
	 * @param id number
	 * @param dto RegionEntity
	 * @returns Promise<UpdateResult>
	 */
	@Put(':id')
	@Version('1')
	@ApiOperation({ description: 'Update existing Region' })
	@ApiBody({ type: RegionEntity })
	@ApiProduces('application/json', 'application/xml')
	@ApiConsumes('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'The record has been successfully updated',
		type: RegionEntity
	})
	updateDtoV1(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: number,
		@Body() dto: RegionEntity
	): Promise<UpdateResult> {
		return this.modifyDto(id, dto);
	}

	/**
	 * Delete dto
	 * @param id number
	 * @returns Promise<DeleteResult>
	 */
	@Delete(':id')
	@Version('1')
	@ApiOperation({ description: 'Delete Region' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'The record has been successfully deleted',
		type: RegionEntity
	})
	deleteDtoV1(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: number
	): Promise<DeleteResult> {
		return this.removeDto(id);
	}
}
