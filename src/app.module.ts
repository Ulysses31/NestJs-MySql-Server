import { CategoriesSubscriber } from './features/categories/service/categories.subscriber';
import { BaseRepository } from './core/services/base-repository';
import { BaseService } from './core/services/base.service';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DbMiddleware } from './core/db.middleware';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './core/authentication/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './core/models/user.entity';
import { BaseSubscriber } from './core/services/base.subscriber';
import { CategoryModule } from './features/categories/categories.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: '.env'
		}),
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: process.env.DATABASE_HOST,
			port: parseInt(process.env.DATABASE_PORT),
			username: process.env.DATABASE_USER,
			password: process.env.DATABASE_PASSWORD,
			database: process.env.DATABASE,
			entities: [UserEntity],
			subscribers: [BaseSubscriber, CategoriesSubscriber],
			autoLoadEntities: true,
			debug: process.env.DATABASE_DEBUG === 'true',
			logger: 'debug',
			synchronize: process.env.DATABASE_SYNC === 'true' // only in develepment mode is true
		}),
		AuthModule,
		CategoryModule
	],
	controllers: [AppController],
	providers: [BaseService, BaseRepository, BaseSubscriber]
})
export class AppModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(DbMiddleware).forRoutes('categories');
	}
}
