import { Injectable } from '@nestjs/common';
import { RegionEntity } from 'src/models/region.entity';
import { EntityManager, Repository } from 'typeorm';

/**
 * RegionsRepository
 * @extends Repository<RegionEntity>
 */
@Injectable()
export class RegionsRepository<
	RegionEntity
> extends Repository<RegionEntity> {
	constructor(public manager: EntityManager) {
		super(RegionEntity, manager);
	}
}
