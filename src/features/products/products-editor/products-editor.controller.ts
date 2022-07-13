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
import { ProductEntity } from 'src/models/product.entity';
import { ProductsService } from '../service/products.service';
import { BaseEditorController } from 'src/core/base-editor-controller';

/**
 * ProductsEditorController
 * @extends BaseEditorController<ProductEntity>
 */
@Controller('Products')
// @UseGuards(JwtAuthGuard)
@ApiTags('Products')
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
export class ProductsEditorController extends BaseEditorController<ProductEntity> {
	constructor(public productservice: ProductsService) {
		super(productservice);
	}

	/**
	 * Find by id
	 * @param id string
	 * @returns Promise<ProductEntity>
	 */
	@Get(':id')
	@Version('1')
	@ApiOperation({ description: 'Get Product by id' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: ProductEntity })
	findByIdV1(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string
	): Promise<ProductEntity> {
		return this.findDtoById(id);
	}

	/**
	 * New dto
	 * @param dto ProductEntity
	 * @returns Promise<InsertResult>
	 */
	@Post()
	@Version('1')
	@ApiOperation({ description: 'Insert new Product' })
	@ApiBody({ type: ProductEntity })
	@ApiProduces('application/json', 'application/xml')
	@ApiConsumes('application/json', 'application/xml')
	@ApiCreatedResponse({
		description: 'The record has been successfully created',
		type: ProductEntity
	})
	newDtoV1(@Body() dto: ProductEntity): Promise<InsertResult> {
		return this.insertNewDto(dto);
	}

	/**
	 * Update dto
	 * @param id number
	 * @param dto ProductEntity
	 * @returns
	 */
	@Put(':id')
	@Version('1')
	@ApiOperation({ description: 'Update existing Product' })
	@ApiBody({ type: ProductEntity })
	@ApiProduces('application/json', 'application/xml')
	@ApiConsumes('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'The record has been successfully updated',
		type: ProductEntity
	})
	updateDtoV1(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: number,
		@Body() dto: ProductEntity
	): Promise<UpdateResult> {
		return this.modifyDto(id, dto);
	}

	/**
	 * Delete dto
	 * @param id  number
	 * @returns Promise<DeleteResult>
	 */
	@Delete(':id')
	@Version('1')
	@ApiOperation({ description: 'Delete Product' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'The record has been successfully deleted',
		type: ProductEntity
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
