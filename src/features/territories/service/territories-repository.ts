import { Injectable } from '@nestjs/common';
import { TerritoryEntity } from 'src/models/territory.entity';
import { EntityManager, Repository } from 'typeorm';

/**
 * TerritoriesRepository
 * @extends Repository<TerritoryEntity>
 */
@Injectable()
export class TerritoriesRepository<
	TerritoryEntity
> extends Repository<TerritoryEntity> {
	constructor(public manager: EntityManager) {
		super(TerritoryEntity, manager);
	}
}
