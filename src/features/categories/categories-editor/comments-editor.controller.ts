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
import { BaseEditorController } from 'src/core/base-editor-controller';
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
import { CategoryEntity } from 'src/models/category.entity';
import { CategoriesService } from '../service/categories.service';

/**
 * CategoriesEditorController
 * @extends BaseEditorController<CategoryEntity>
 */
@Controller('Categories')
// @UseGuards(JwtAuthGuard)
@ApiTags('Categories')
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
export class CategoriesEditorController extends BaseEditorController<CategoryEntity> {
	constructor(public Categorieservice: CategoriesService) {
		super(Categorieservice);
	}

	/**
	 * Find by id
	 * @param id string
	 * @returns Promise<CategoryEntity>
	 */
	@Get(':id')
	@Version('1')
	@ApiOperation({ description: 'Get Category by id' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: CategoryEntity })
	findByIdV1(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string
	): Promise<CategoryEntity> {
		return this.findDtoById(id);
	}

	/**
	 * New dto
	 * @param dto CategoryEntity
	 * @returns Promise<InsertResult>
	 */
	@Post()
	@Version('1')
	@ApiOperation({ description: 'Insert new Category' })
	@ApiBody({ type: CategoryEntity })
	@ApiProduces('application/json', 'application/xml')
	@ApiConsumes('application/json', 'application/xml')
	@ApiCreatedResponse({
		description: 'The record has been successfully created',
		type: CategoryEntity
	})
	newDtoV1(@Body() dto: CategoryEntity): Promise<InsertResult> {
		return this.insertNewDto(dto);
	}

	/**
	 * Update dto
	 * @param id number
	 * @param dto CategoryEntity
	 * @returns Promise<UpdateResult>
	 */
	@Put(':id')
	@Version('1')
	@ApiOperation({ description: 'Update existing Category' })
	@ApiBody({ type: CategoryEntity })
	@ApiProduces('application/json', 'application/xml')
	@ApiConsumes('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'The record has been successfully updated',
		type: CategoryEntity
	})
	updateDtoV1(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: number,
		@Body() dto: CategoryEntity
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
	@ApiOperation({ description: 'Delete Category' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'The record has been successfully deleted',
		type: CategoryEntity
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
