import { DataSource } from 'typeorm';
import { UserEntity } from './core/models/user.entity';
import { BaseSubscriber } from './core/services/base.subscriber';
import { CommentsSubscriber } from './features/comments/service/comments.subscriber';
import { CommentEntity } from './models/comment.entity';

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
	entities: [UserEntity, CommentEntity],
	subscribers: [BaseSubscriber, CommentsSubscriber],
	migrations: []
});
