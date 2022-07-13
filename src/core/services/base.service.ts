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

@Injectable()
export class BaseService<TModel> implements IBaseService<TModel> {
	constructor(
		@InjectRepository(BaseRepository)
		public readonly bsRepo: Repository<TModel>
	) {}

	async findAll(): Promise<TModel[]> {
		try {
			const data = await this.bsRepo.find();
			return await Promise.resolve(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async findOne(id: any): Promise<TModel> {
		try {
			const data = await this.bsRepo.findOneBy({});
			return await Promise.resolve(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	async create(dto: any): Promise<InsertResult> {
		try {
			const data = await this.bsRepo.insert(dto);
			return await Promise.resolve(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	async update(id: number, dto: any): Promise<UpdateResult> {
		try {
			const data = await this.bsRepo.update(id, dto);
			return await Promise.resolve(data);
		} catch (err) {
			throw handleError(err);
		}
	}

	async remove(id: number): Promise<DeleteResult> {
		try {
			const data = await this.bsRepo.delete(id);
			return await Promise.resolve(data);
		} catch (err) {
			throw handleError(err);
		}
	}
}
