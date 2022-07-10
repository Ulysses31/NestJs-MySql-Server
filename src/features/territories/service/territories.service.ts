import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { TerritoryEntity } from 'src/models/territory.entity';
import { Repository } from 'typeorm';
import { TerritoriesRepository } from './territories-repository';

@Injectable()
export class TerritoriesService extends BaseService<TerritoryEntity> {
	constructor(
		@InjectRepository(TerritoriesRepository)
		public readonly bsRepo: Repository<TerritoryEntity>
	) {
		super(bsRepo);
	}
}
