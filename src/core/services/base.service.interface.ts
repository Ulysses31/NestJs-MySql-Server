import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';

/**
 * IBaseService<TModel> interface
 */
export interface IBaseService<TModel> {
	/**
	 * Get all dto list
	 */
	findAll(): Promise<TModel[]>;

	/**
	 * Find  a dto by id
	 * @param id: any
	 */
	// findOne(id: any): Promise<TModel>;

	/**
	 * Create a new dto
	 * @param dto TModel
	 */
	create(dto: TModel): Promise<InsertResult>;

	/**
	 * Update an existing dto
	 * @param id number
	 * @param dto TModel
	 */
	update(id: number, dto: TModel): Promise<UpdateResult>;

	/**
	 * Delete an existing dto
	 * @param id number
	 */
	remove(id: number): Promise<DeleteResult>;
}
