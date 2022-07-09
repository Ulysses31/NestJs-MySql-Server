import { BaseService } from './services/base.service';
import { BaseEntity } from './models/base.entity';

export abstract class BaseBrowserController<
	TModel extends BaseEntity
> {
	model?: TModel[] = [];

	abstract findAllV1(): Promise<TModel[]>;

	constructor(public baseService: BaseService<TModel>) {}

	findDtoAll(): Promise<TModel[]> {
		return this.baseService.findAll();
	}
}
