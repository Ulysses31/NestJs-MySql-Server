import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { BaseCoreEntity } from './models/base.entity';
import { BaseService } from './services/base.service';

/**
 * BaseEditorController<TModel>
 * @extends TModel BaseCoreEntity
 */
export abstract class BaseEditorController<
	TModel extends BaseCoreEntity
> {
	model?: TModel;

	abstract findByIdV1(id: string): Promise<TModel>;
	abstract newDtoV1(dto: TModel): Promise<InsertResult>;
	abstract updateDtoV1(
		id: number,
		dto: TModel
	): Promise<UpdateResult>;
	abstract deleteDtoV1(id: number): Promise<DeleteResult>;

	constructor(public baseService: BaseService<TModel>) {}

	/**
	 * Find dto by id
	 * @param id string
	 * @returns Promise<TModel>
	 */
	async findDtoById(id: string): Promise<TModel> {
		return await this.baseService.findOne(id);
	}

	/**
	 * Insert a new dto
	 * @param dto TModel
	 * @returns Promise<InsertResult>
	 */
	async insertNewDto(dto: TModel): Promise<InsertResult> {
		return await this.baseService.create(dto);
	}

	/**
	 * Update existing dto
	 * @param id number
	 * @param dto TModel
	 * @returns Promise<UpdateResult>
	 */
	async modifyDto(id: number, dto: TModel): Promise<UpdateResult> {
		return await this.baseService.update(id, dto);
	}

	/**
	 * Delete an existing dto
	 * @param id number
	 * @returns Promise<DeleteResult>
	 */
	async removeDto(id: number): Promise<DeleteResult> {
		return await this.baseService.remove(id);
	}
}
