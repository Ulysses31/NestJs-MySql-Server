import { JwtAuthGuard } from './core/authentication/jwt-auth.guard';
import { LocalAuthGuard } from './core/authentication/local-auth.guard';
import {
	Controller,
	Request,
	Post,
	UseGuards,
	Get,
	Version
} from '@nestjs/common';
import { AuthService } from './core/authentication/services/auth.service';
import { UserEntity } from './core/models/user.entity';
import {
	ApiBadRequestResponse,
	ApiUnauthorizedResponse,
	ApiForbiddenResponse,
	ApiNotFoundResponse,
	ApiNotAcceptableResponse,
	ApiInternalServerErrorResponse,
	ApiTags,
	ApiOkResponse,
	ApiProduces,
	ApiBearerAuth,
	ApiExcludeEndpoint
} from '@nestjs/swagger';

@Controller('Auth')
@ApiTags('Auth')
@ApiBadRequestResponse({ description: 'Bad Request' })
@ApiUnauthorizedResponse({ description: 'UserEntity not authorized' })
@ApiForbiddenResponse({ description: 'Request is forbidden' })
@ApiNotFoundResponse({ description: 'Request not found' })
@ApiNotAcceptableResponse({
	description: 'Request is not acceptable'
})
@ApiInternalServerErrorResponse({
	description: 'Internal Server Error'
})
export class AppController {
	constructor(private authService: AuthService) {}

	@Post('login')
	@Version('1')
	@UseGuards(LocalAuthGuard)
	@ApiExcludeEndpoint()
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: UserEntity })
	async login(@Request() req) {
		return this.authService.login(req.user as UserEntity);
	}

	@Get('profile')
	@Version('1')
	@UseGuards(JwtAuthGuard)
	@ApiBearerAuth()
	@ApiExcludeEndpoint()
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: UserEntity })
	getProfile(@Request() req) {
		return req.user;
	}

	@Post('refresh-token')
	@Version('1')
	@UseGuards(JwtAuthGuard)
	@ApiBearerAuth()
	@ApiExcludeEndpoint()
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: UserEntity })
	async refreshToken(@Request() req) {
		console.log(req.body);
		return this.authService.createAccessTokenFromRefreshToken(
			req.body.refresh_token
		);
	}
}
