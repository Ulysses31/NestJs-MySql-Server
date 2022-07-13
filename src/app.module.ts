import { CustomerCustomerDemosSubscriber } from './features/customer-customer-demo/service/customer-customer-demo.subscriber';
import { CustomerCustomerDemoModule } from './features/customer-customer-demo/customer-customer-demo.module';
import { EmployeesTerritoriesSubscriber } from './features/employees-territories/service/employees-territories.subscriber';
import { EmployeeTerritoryModule } from './features/employees-territories/employees-territories.module';
import { CustomerDemographicsSubscriber } from './features/customer-demographic/service/customer-demographic.subscriber';
import { TerritoriesSubscriber } from './features/territories/service/territories.subscriber';
import { TerritoryModule } from './features/territories/territories.module';
import { SuppliersSubscriber } from './features/suppliers/service/suppliers.subscriber';
import { SupplierModule } from './features/suppliers/suppliers.module';
import { ShippersSubscriber } from './features/shippers/service/shippers.subscriber';
import { ShipperModule } from './features/shippers/shippers.module';
import { RegionsSubscriber } from './features/regions/service/regions.subscriber';
import { RegionModule } from './features/regions/regions.module';
import { EmployeesSubscriber } from './features/employees/service/employees.subscriber';
import { EmployeeModule } from './features/employees/employees.module';
import { CustomersSubscriber } from './features/customers/service/customers.subscriber';
import { OrdersSubscriber } from './features/orders/service/orders.subscriber';
import { OrderModule } from './features/orders/orders.module';
import { OrderDetailsSubscriber } from './features/order-details/service/order-details.subscriber';
import { ProductsSubscriber } from './features/products/service/products.subscriber';
import { ProductModule } from './features/products/products.module';
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
import { CategoryModule } from './features/categories/categories.module';
import { OrderDetailModule } from './features/order-details/order-details.module';
import { CustomerModule } from './features/customers/customers.module';
import { CustomerDemographicModule } from './features/customer-demographic/customer-demographic.module';
import { BaseSubscriber } from './core/services/base.subscriber';

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
			subscribers: [
				BaseSubscriber,
				CategoriesSubscriber,
				ProductsSubscriber,
				OrdersSubscriber,
				OrderDetailsSubscriber,
				CustomersSubscriber,
				EmployeesSubscriber,
				RegionsSubscriber,
				ShippersSubscriber,
				SuppliersSubscriber,
				TerritoriesSubscriber,
				CustomerDemographicsSubscriber,
				EmployeesTerritoriesSubscriber,
				CustomerCustomerDemosSubscriber
			],
			autoLoadEntities: true,
			debug: process.env.DATABASE_DEBUG === 'true',
			logging: 'all',
			logger: 'advanced-console',
			synchronize: process.env.DATABASE_SYNC === 'true' // only in develepment mode is true
		}),
		AuthModule,
		CategoryModule,
		ProductModule,
		EmployeeModule,
		OrderModule,
		OrderDetailModule,
		CustomerModule,
		RegionModule,
		ShipperModule,
		SupplierModule,
		TerritoryModule,
		CustomerDemographicModule,
		EmployeeTerritoryModule,
		CustomerCustomerDemoModule
	],
	controllers: [AppController],
	providers: [Object, BaseService, BaseRepository, BaseSubscriber]
})
export class AppModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(DbMiddleware)
			.forRoutes(
				AuthModule,
				CategoryModule,
				ProductModule,
				EmployeeModule,
				OrderModule,
				OrderDetailModule,
				CustomerModule,
				RegionModule,
				ShipperModule,
				SupplierModule,
				TerritoryModule,
				CustomerDemographicModule,
				EmployeeTerritoryModule,
				CustomerCustomerDemoModule
			);
	}
}
