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
import { SuppliersService } from '../service/suppliers.service';
import { SupplierEntity } from 'src/models/supplier.entity';

/**
 * SuppliersBrowserController
 * @extends BaseBrowserController<SupplierEntity>
 */
@Controller('Suppliers')
//@UseGuards(JwtAuthGuard)
@ApiTags('Suppliers')
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
export class SuppliersBrowserController extends BaseBrowserController<SupplierEntity> {
	constructor(public suppliersService: SuppliersService) {
		super(suppliersService);
	}

	/**
	 * Find all
	 * @returns Promise<SupplierEntity[]>
	 */
	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of Suppliers' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: SupplierEntity })
	findAllV1(): Promise<SupplierEntity[]> {
		return this.findDtoAll();
	}
}
