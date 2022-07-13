import { HttpException, Logger, HttpStatus } from '@nestjs/common';

/**
 * Error exception handler
 * @param err any
 * @returns HttpException
 */
export function handleError(err: any): HttpException {
	Logger.log(err);
	return new HttpException(
		{
			error: err.message
		},
		HttpStatus.INTERNAL_SERVER_ERROR
	);
}
