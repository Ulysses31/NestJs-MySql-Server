import { CategoriesSubscriber } from './features/categories/service/categories.subscriber';
import { DataSource } from 'typeorm';
import { UserEntity } from './core/models/user.entity';
import { BaseSubscriber } from './core/services/base.subscriber';
import { CategoryEntity } from './models/category.entity';

export const AppDataSourceCli = new DataSource({
	type: 'mysql',
	host: 'localhost',
	port: 3306,
	username: 'root',
	password: '',
	database: 'northwind',
	logging: true,
	synchronize: true,
	trace: true,
	entities: [UserEntity, CategoryEntity],
	subscribers: [BaseSubscriber, CategoriesSubscriber],
	migrations: []
});
