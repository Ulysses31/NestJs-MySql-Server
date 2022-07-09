import { Controller, Get, UseGuards, Version } from '@nestjs/common';
import { BaseBrowserController } from 'src/core/base-browser-controller';
import { CommentEntity } from 'src/models/comment.entity';
import { CommentService } from '../service/comments.service';
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

@Controller('Comments')
//@UseGuards(JwtAuthGuard)
@ApiTags('Comments')
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
export class CommentsBrowserController extends BaseBrowserController<CommentEntity> {
	constructor(public commentsService: CommentService) {
		super(commentsService);
	}

	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of comments' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: CommentEntity })
	findAllV1(): Promise<CommentEntity[]> {
		return this.findDtoAll();
	}
}
