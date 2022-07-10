import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { RegionEntity } from 'src/models/Region.entity';
import { Repository } from 'typeorm';
import { RegionsRepository } from './Regions-repository';

@Injectable()
export class RegionsService extends BaseService<RegionEntity> {
	constructor(
		@InjectRepository(RegionsRepository)
		public readonly bsRepo: Repository<RegionEntity>
	) {
		super(bsRepo);
	}
}
