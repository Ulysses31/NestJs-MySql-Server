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
import { BaseEditorController } from 'src/core/base-Editor-controller';
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
import { TerritoryEntity } from 'src/models/territory.entity';
import { TerritoriesService } from '../service/territories.service';

/**
 * TerritoriesEditorController
 * @extends BaseEditorController<TerritoryEntity>
 */
@Controller('Territories')
// @UseGuards(JwtAuthGuard)
@ApiTags('Territories')
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
export class TerritoriesEditorController extends BaseEditorController<TerritoryEntity> {
	constructor(public Territorieservice: TerritoriesService) {
		super(Territorieservice);
	}

	/**
	 * Find by id
	 * @param id string
	 * @returns Promise<TerritoryEntity>
	 */
	@Get(':id')
	@Version('1')
	@ApiOperation({ description: 'Get Territory by id' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: TerritoryEntity })
	findByIdV1(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string
	): Promise<TerritoryEntity> {
		return this.findDtoById(id);
	}

	/**
	 * New dto
	 * @param dto TerritoryEntity
	 * @returns Promise<InsertResult>
	 */
	@Post()
	@Version('1')
	@ApiOperation({ description: 'Insert new Territory' })
	@ApiBody({ type: TerritoryEntity })
	@ApiProduces('application/json', 'application/xml')
	@ApiConsumes('application/json', 'application/xml')
	@ApiCreatedResponse({
		description: 'The record has been successfully created',
		type: TerritoryEntity
	})
	newDtoV1(@Body() dto: TerritoryEntity): Promise<InsertResult> {
		return this.insertNewDto(dto);
	}

	/**
	 * Update dto
	 * @param id numbner
	 * @param dto TerritoryEntity
	 * @returns Promise<UpdateResult>
	 */
	@Put(':id')
	@Version('1')
	@ApiOperation({ description: 'Update existing Territory' })
	@ApiBody({ type: TerritoryEntity })
	@ApiProduces('application/json', 'application/xml')
	@ApiConsumes('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'The record has been successfully updated',
		type: TerritoryEntity
	})
	updateDtoV1(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: number,
		@Body() dto: TerritoryEntity
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
	@ApiOperation({ description: 'Delete Territory' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'The record has been successfully deleted',
		type: TerritoryEntity
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
