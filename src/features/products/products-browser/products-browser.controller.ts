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
import { ProductsService } from '../service/Products.service';
import { ProductEntity } from 'src/models/product.entity';

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
	constructor(public ProductsService: ProductsService) {
		super(ProductsService);
	}

	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of Products' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: ProductEntity })
	findAllV1(): Promise<ProductEntity[]> {
		return this.findDtoAll();
	}
}
