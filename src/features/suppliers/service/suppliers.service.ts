import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { SupplierEntity } from 'src/models/supplier.entity';
import { handleError } from 'src/shared/shared';
import { Repository } from 'typeorm';
import { SuppliersRepository } from './suppliers-repository';

/**
 * SuppliersService
 * @extends BaseService<SupplierEntity>
 */
@Injectable()
export class SuppliersService extends BaseService<SupplierEntity> {
	constructor(
		@InjectRepository(SuppliersRepository)
		public readonly bsRepo: Repository<SupplierEntity>
	) {
		super(bsRepo);
	}

	/**
	 * Find one
	 * @param id any
	 * @returns Promise<SupplierEntity>
	 */
	async findOne(id: any): Promise<SupplierEntity> {
		try {
			const data = await this.bsRepo.findOneBy({ supplierId: id });
			return await Promise.resolve(data);
		} catch (err) {
			throw handleError(err);
		}
	}
}
