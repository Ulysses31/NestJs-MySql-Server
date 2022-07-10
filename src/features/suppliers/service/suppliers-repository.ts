import { Injectable } from '@nestjs/common';
import { SupplierEntity } from 'src/models/supplier.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class SuppliersRepository<
	SupplierEntity
> extends Repository<SupplierEntity> {
	constructor(public manager: EntityManager) {
		super(SupplierEntity, manager);
	}
}
