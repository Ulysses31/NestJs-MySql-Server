import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { TerritoryEntity } from 'src/models/territory.entity';
import { handleError } from 'src/shared/shared';
import { Repository } from 'typeorm';
import { TerritoriesRepository } from './territories-repository';

/**
 * TerritoriesService
 * @extends BaseService<TerritoryEntity>
 */
@Injectable()
export class TerritoriesService extends BaseService<TerritoryEntity> {
	constructor(
		@InjectRepository(TerritoriesRepository)
		public readonly bsRepo: Repository<TerritoryEntity>
	) {
		super(bsRepo);
	}

	/**
	 * Find one
	 * @param id any
	 * @returns Promise<TerritoryEntity>
	 */
	async findOne(id: any): Promise<TerritoryEntity> {
		try {
			const data = await this.bsRepo.findOneBy({ territoryId: id });
			return await Promise.resolve(data);
		} catch (err) {
			throw handleError(err);
		}
	}
}
