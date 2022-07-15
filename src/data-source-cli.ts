import { DataSource } from 'typeorm';
import { join } from 'path';

export const AppDataSourceCli = new DataSource({
	type: 'mysql',
	host: 'localhost',
	port: 3306,
	username: 'root',
	password: '',
	database: 'northwind',
	logging: 'all',
	logger: 'debug',
	debug: true,
	synchronize: false,
	trace: true,
	entities: [join(__dirname, '/.././dist/models/**/', '*.js')],
	subscribers: [join(__dirname, '/.././dist/**/', '*.subscriber.js')],
	migrations: [
		join(__dirname, '/src/migrations/**/', '*-migration.ts')
	]
	// entities: [
	// 	UserEntity,
	// 	CustomerCustomerDemoEntity,
	// 	CategoryEntity,
	// 	CustomerDemographicEntity,
	// 	CustomersEntity,
	// 	EmployeeTerritoryEntity,
	// 	EmployeeEntity,
	// 	OrderDetailEntity,
	// 	OrderEntity,
	// 	ProductEntity,
	// 	RegionEntity,
	// 	ShipperEntity,
	// 	SupplierEntity,
	// 	TerritoryEntity
	// ],
	// subscribers: [
	// 	BaseSubscriber,
	// 	CategoriesSubscriber,
	// 	ProductsSubscriber,
	// 	OrdersSubscriber,
	// 	OrderDetailsSubscriber,
	// 	CustomersSubscriber,
	// 	EmployeesSubscriber,
	// 	RegionsSubscriber,
	// 	ShippersSubscriber,
	// 	SuppliersSubscriber,
	// 	TerritoriesSubscriber,
	// 	CustomerDemographicsSubscriber,
	// 	EmployeesTerritoriesSubscriber,
	// 	CustomerCustomerDemosSubscriber
	// ],
	// migrations: []
});
