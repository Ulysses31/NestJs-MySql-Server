import { ProductsService } from './../service/products.service';
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
import { ProductEntity } from 'src/models/product.entity';

/**
 * ProductsBrowserController
 * @extends BaseBrowserController<ProductEntity>
 */
@Controller('Products')
//@UseGuards(JwtAuthGuard)
@ApiTags('Products')
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
export class ProductsBrowserController extends BaseBrowserController<ProductEntity> {
	constructor(public productsService: ProductsService) {
		super(productsService);
	}

	/**
	 * Find all
	 * @returns Promise<ProductEntity[]>
	 */
	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of Products' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: ProductEntity })
	findAllV1(): Promise<ProductEntity[]> {
		return this.findDtoAll();
	}
}
