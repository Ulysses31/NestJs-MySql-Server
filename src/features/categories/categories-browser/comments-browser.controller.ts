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
import { CategoriesService } from '../service/categories.service';
import { CategoryEntity } from 'src/models/category.entity';

/**
 * CategoriesBrowserController
 * @extends BaseBrowserController<CategoryEntity>
 */
@Controller('Categories')
//@UseGuards(JwtAuthGuard)
@ApiTags('Categories')
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
export class CategoriesBrowserController extends BaseBrowserController<CategoryEntity> {
	constructor(public categoriesService: CategoriesService) {
		super(categoriesService);
	}

	/**
	 * Find all
	 * @returns Promise<CategoryEntity[]>
	 */
	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of Categories' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: CategoryEntity })
	findAllV1(): Promise<CategoryEntity[]> {
		return this.findDtoAll();
	}
}
