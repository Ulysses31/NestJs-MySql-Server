import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { SupplierEntity } from 'src/models/supplier.entity';
import { Repository } from 'typeorm';
import { SuppliersRepository } from './suppliers-repository';

@Injectable()
export class SuppliersService extends BaseService<SupplierEntity> {
	constructor(
		@InjectRepository(SuppliersRepository)
		public readonly bsRepo: Repository<SupplierEntity>
	) {
		super(bsRepo);
	}
}
