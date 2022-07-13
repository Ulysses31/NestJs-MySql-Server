import { TerritoryEntity } from './models/territory.entity';
import { SupplierEntity } from './models/supplier.entity';
import { ShipperEntity } from './models/shipper.entity';
import { RegionEntity } from './models/region.entity';
import { ProductEntity } from './models/product.entity';
import { OrderEntity } from './models/order.entity';
import { OrderDetailEntity } from 'src/models/order-detail.entity';
import { EmployeeEntity } from './models/employee.entity';
import { EmployeeTerritoryEntity } from './models/employee-territory.entity';
import { CustomersEntity } from './models/customer.entity';
import { CustomerDemographicEntity } from 'src/models/customer-demographic.entity';
import { CustomerCustomerDemoEntity } from './models/customer-customer-demo.entity';
import { CategoriesSubscriber } from './features/categories/service/categories.subscriber';
import { DataSource } from 'typeorm';
import { UserEntity } from './core/models/user.entity';
import { BaseSubscriber } from './core/services/base.subscriber';
import { CategoryEntity } from './models/category.entity';
import { CustomerCustomerDemosSubscriber } from './features/customer-customer-demo/service/customer-customer-demo.subscriber';
import { CustomerDemographicsSubscriber } from './features/customer-demographic/service/customer-demographic.subscriber';
import { CustomersSubscriber } from './features/customers/service/customers.subscriber';
import { EmployeesTerritoriesSubscriber } from './features/employees-territories/service/employees-territories.subscriber';
import { EmployeesSubscriber } from './features/employees/service/employees.subscriber';
import { OrderDetailsSubscriber } from './features/order-details/service/order-details.subscriber';
import { OrdersSubscriber } from './features/orders/service/orders.subscriber';
import { ProductsSubscriber } from './features/products/service/products.subscriber';
import { RegionsSubscriber } from './features/regions/service/regions.subscriber';
import { ShippersSubscriber } from './features/shippers/service/shippers.subscriber';
import { SuppliersSubscriber } from './features/suppliers/service/suppliers.subscriber';
import { TerritoriesSubscriber } from './features/territories/service/territories.subscriber';

export const AppDataSourceCli = new DataSource({
	type: 'mysql',
	host: 'localhost',
	port: 3306,
	username: 'root',
	password: '',
	database: 'northwind',
	logging: true,
	synchronize: false,
	trace: true,
	relationLoadStrategy: 'join',
	entities: [
		UserEntity,
		CustomerCustomerDemoEntity,
		CategoryEntity,
		CustomerDemographicEntity,
		CustomersEntity,
		EmployeeTerritoryEntity,
		EmployeeEntity,
		OrderDetailEntity,
		OrderEntity,
		ProductEntity,
		RegionEntity,
		ShipperEntity,
		SupplierEntity,
		TerritoryEntity
	],
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
	migrations: []
});
