import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { ShipperEntity } from 'src/models/shipper.entity';
import { Repository } from 'typeorm';
import { ShippersRepository } from './shippers-repository';

@Injectable()
export class ShippersService extends BaseService<ShipperEntity> {
	constructor(
		@InjectRepository(ShippersRepository)
		public readonly bsRepo: Repository<ShipperEntity>
	) {
		super(bsRepo);
	}
}
