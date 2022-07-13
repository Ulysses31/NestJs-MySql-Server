import { CustomersEntity } from 'src/models/customer.entity';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/core/services/base-repository';
import { EntityManager, QueryRunner } from 'typeorm';

/**
 * CustomersRepository
 * @extends BaseRepository<CustomersEntity>
 */
@Injectable()
export class CustomersRepository<
	CustomersEntity
> extends BaseRepository<CustomersEntity> {
	constructor(
		public manager: EntityManager,
		public qRunner: QueryRunner
	) {
		super(CustomersEntity, manager, qRunner);
	}
}
