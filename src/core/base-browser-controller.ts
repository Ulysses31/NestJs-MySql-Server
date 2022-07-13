import { BaseService } from './services/base.service';
import { BaseCoreEntity } from './models/base.entity';

/**
 * BaseBrowserController<TModel>
 * @extends TModel BaseCoreEntity
 */
export abstract class BaseBrowserController<
	TModel extends BaseCoreEntity
> {
	model?: TModel[] = [];

	abstract findAllV1(): Promise<TModel[]>;

	constructor(public baseService: BaseService<TModel>) {}

	/**
	 * Get list of dtos
	 * @returns Promise<TModel[]>
	 */
	async findDtoAll(): Promise<TModel[]> {
		return await this.baseService.findAll();
	}
}
