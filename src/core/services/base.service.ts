import { BaseRepository } from './base-repository';
import { Injectable } from '@nestjs/common';
import {
	DeleteResult,
	InsertResult,
	Repository,
	UpdateResult
} from 'typeorm';
import { IBaseService } from './base.service.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { handleError } from 'src/shared/shared';

// const headers = {
// 	ContentType: 'json'
// };

/**
 * BaseService<TModel>
 * @implements IBaseService<TModel>
 */
@Injectable()
export class BaseService<TModel> implements IBaseService<TModel> {
	constructor(
		@InjectRepository(BaseRepository)
		public readonly bsRepo: Repository<TModel>
	) {}

	/**
	 * Find all
	 * @returns Promise<TModel[]>
	 */
	async findAll(): Promise<TModel[]> {
		try {
			const data = await this.bsRepo.find();
			return await Promise.resolve(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Find one
	 * @param id any
	 * @returns Promise<TModel>
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async findOne(id: any): Promise<TModel> {
		try {
			const data = await this.bsRepo.findOneBy({});
			return await Promise.resolve(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Create dto
	 * @param dto any
	 * @returns promise<InsertResult>
	 */
	async create(dto: any): Promise<InsertResult> {
		try {
			const data = await this.bsRepo.insert(dto);
			return await Promise.resolve(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Update dto
	 * @param id number
	 * @param dto any
	 * @returns Promise<UpdateResult>
	 */
	async update(id: number, dto: any): Promise<UpdateResult> {
		try {
			const data = await this.bsRepo.update(id, dto);
			return await Promise.resolve(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	/**
	 * Remove dto
	 * @param id number
	 * @returns Promise<DeleteResult>
	 */
	async remove(id: number): Promise<DeleteResult> {
		try {
			const data = await this.bsRepo.delete(id);
			return await Promise.resolve(data);
		} catch (err) {
			throw handleError(err);
		}
	}
}
