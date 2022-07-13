import { Injectable } from '@nestjs/common';
import { ShipperEntity } from 'src/models/shipper.entity';
import { EntityManager, Repository } from 'typeorm';

/**
 * ShippersRepository
 * @extends Repository<ShipperEntity>
 */
@Injectable()
export class ShippersRepository<
	ShipperEntity
> extends Repository<ShipperEntity> {
	constructor(public manager: EntityManager) {
		super(ShipperEntity, manager);
	}
}
