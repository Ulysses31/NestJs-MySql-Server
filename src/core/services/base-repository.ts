import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class BaseRepository<TModel> extends Repository<TModel> {
	constructor(public manager: EntityManager) {
		super(null, manager);
	}
}
