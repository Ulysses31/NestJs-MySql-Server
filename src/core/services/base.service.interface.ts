import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';

export interface IBaseService<TModel> {
	findAll(): Promise<TModel[]>;
	// findOne(id: any): Promise<TModel>;
	create(dto: TModel): Promise<InsertResult>;
	update(id: number, dto: TModel): Promise<UpdateResult>;
	remove(id: number): Promise<DeleteResult>;
}
