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
import { OrderDetailEntity } from 'src/models/order-detail.entity';
import { OrderDetailsService } from '../service/order-details.service';
import { BaseEditorController } from 'src/core/base-editor-controller';

/**
 * OrderDetailsEditorController
 * @extends BaseEditorController<OrderDetailEntity>
 */
@Controller('OrderDetails')
// @UseGuards(JwtAuthGuard)
@ApiTags('OrderDetails')
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
export class OrderDetailsEditorController extends BaseEditorController<OrderDetailEntity> {
	constructor(public orderDetailservice: OrderDetailsService) {
		super(orderDetailservice);
	}

	/**
	 * Find by id
	 * @param id string
	 * @returns Promise<OrderDetailEntity>
	 */
	@Get(':id')
	@Version('1')
	@ApiOperation({ description: 'Get OrderDetail by id' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'OK success',
		type: OrderDetailEntity
	})
	findByIdV1(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: string
	): Promise<OrderDetailEntity> {
		return this.findDtoById(id);
	}

	/**
	 * New dto
	 * @param dto OrderDetailEntity
	 * @returns Promise<InsertResult>
	 */
	@Post()
	@Version('1')
	@ApiOperation({ description: 'Insert new OrderDetail' })
	@ApiBody({ type: OrderDetailEntity })
	@ApiProduces('application/json', 'application/xml')
	@ApiConsumes('application/json', 'application/xml')
	@ApiCreatedResponse({
		description: 'The record has been successfully created',
		type: OrderDetailEntity
	})
	newDtoV1(@Body() dto: OrderDetailEntity): Promise<InsertResult> {
		return this.insertNewDto(dto);
	}

	/**
	 * Update dto
	 * @param id number
	 * @param dto OrderDetailEntity
	 * @returns Promise<UpdateResult>
	 */
	@Put(':id')
	@Version('1')
	@ApiOperation({ description: 'Update existing OrderDetail' })
	@ApiBody({ type: OrderDetailEntity })
	@ApiProduces('application/json', 'application/xml')
	@ApiConsumes('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'The record has been successfully updated',
		type: OrderDetailEntity
	})
	updateDtoV1(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: number,
		@Body() dto: OrderDetailEntity
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
	@ApiOperation({ description: 'Delete OrderDetail' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'The record has been successfully deleted',
		type: OrderDetailEntity
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
