import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { ShipperEntity } from 'src/models/shipper.entity';
import { handleError } from 'src/shared/shared';
import { Repository } from 'typeorm';
import { ShippersRepository } from './shippers-repository';

/**
 * ShippersService
 * @extends BaseService<ShipperEntity>
 */
@Injectable()
export class ShippersService extends BaseService<ShipperEntity> {
	constructor(
		@InjectRepository(ShippersRepository)
		public readonly bsRepo: Repository<ShipperEntity>
	) {
		super(bsRepo);
	}

	/**
	 * Find one
	 * @param id any
	 * @returns Promise<ShipperEntity>
	 */
	async findOne(id: any): Promise<ShipperEntity> {
		try {
			const data = await this.bsRepo.findOneBy({ shipperId: id });
			return await Promise.resolve(data);
		} catch (err) {
			throw handleError(err);
		}
	}
}
