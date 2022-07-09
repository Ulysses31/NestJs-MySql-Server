import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { BaseEntity } from './models/base.entity';
import { BaseService } from './services/base.service';

export abstract class BaseEditorController<
	TModel extends BaseEntity
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

	findDtoById(id: string): Promise<TModel> {
		// return this.baseService.findOne(id);
		return null;
	}

	insertNewDto(dto: TModel): Promise<InsertResult> {
		return this.baseService.create(dto);
	}

	modifyDto(id: number, dto: TModel): Promise<UpdateResult> {
		return this.baseService.update(id, dto);
	}

	removeDto(id: number): Promise<DeleteResult> {
		return this.baseService.remove(id);
	}
}
