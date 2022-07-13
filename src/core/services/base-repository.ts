import { Injectable } from '@nestjs/common';
import {
	Repository,
	EntityManager,
	QueryRunner,
	EntityTarget
} from 'typeorm';

@Injectable()
export class BaseRepository<TModel> extends Repository<TModel> {
	constructor(
		public obj: EntityTarget<TModel>,
		public manager: EntityManager,
		public qRunner: QueryRunner
	) {
		super(obj, manager, qRunner);
	}
}
