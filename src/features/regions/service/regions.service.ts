import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { RegionEntity } from 'src/models/Region.entity';
import { handleError } from 'src/shared/shared';
import { Repository } from 'typeorm';
import { RegionsRepository } from './Regions-repository';

/**
 * RegionsService
 * @extends BaseService<RegionEntity>
 */
@Injectable()
export class RegionsService extends BaseService<RegionEntity> {
	constructor(
		@InjectRepository(RegionsRepository)
		public readonly bsRepo: Repository<RegionEntity>
	) {
		super(bsRepo);
	}

	/**
	 * Find one
	 * @param id any
	 * @returns Promise<RegionEntity>
	 */
	async findOne(id: any): Promise<RegionEntity> {
		try {
			const data = await this.bsRepo.findOneBy({ regionId: id });
			return await Promise.resolve(data);
		} catch (err) {
			throw handleError(err);
		}
	}
}
