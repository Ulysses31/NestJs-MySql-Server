import { BaseEntity } from './../core/models/base.entity';
import { OrderEntity } from './order.entity';
import { TerritoryEntity } from './territory.entity';
import {
	Column,
	Entity,
	Index,
	JoinColumn,
	JoinTable,
	ManyToMany,
	ManyToOne,
	OneToMany
} from 'typeorm';

@Index('FK_Employees_Employees', ['reportsTo'], {})
@Entity({ name: 'employees', schema: 'northwind' })
export class EmployeeEntity extends BaseEntity {
	@Column('int', { primary: true, name: 'EmployeeID' })
	employeeId: number;

	@Column('varchar', { name: 'LastName', length: 20 })
	lastName: string;

	@Column('varchar', { name: 'FirstName', length: 10 })
	firstName: string;

	@Column('varchar', { name: 'Title', nullable: true, length: 30 })
	title: string | null;

	@Column('varchar', {
		name: 'TitleOfCourtesy',
		nullable: true,
		length: 25
	})
	titleOfCourtesy: string | null;

	@Column('datetime', { name: 'BirthDate', nullable: true })
	birthDate: Date | null;

	@Column('datetime', { name: 'HireDate', nullable: true })
	hireDate: Date | null;

	@Column('varchar', { name: 'Address', nullable: true, length: 60 })
	address: string | null;

	@Column('varchar', { name: 'City', nullable: true, length: 15 })
	city: string | null;

	@Column('varchar', { name: 'Region', nullable: true, length: 15 })
	region: string | null;

	@Column('varchar', {
		name: 'PostalCode',
		nullable: true,
		length: 10
	})
	postalCode: string | null;

	@Column('varchar', { name: 'Country', nullable: true, length: 15 })
	country: string | null;

	@Column('varchar', {
		name: 'HomePhone',
		nullable: true,
		length: 24
	})
	homePhone: string | null;

	@Column('varchar', { name: 'Extension', nullable: true, length: 4 })
	extension: string | null;

	@Column('longblob', { name: 'Photo', nullable: true })
	photo: Buffer | null;

	@Column('longtext', { name: 'Notes', nullable: true })
	notes: string | null;

	@Column('int', { name: 'ReportsTo', nullable: true })
	reportsTo: number | null;

	@Column('varchar', {
		name: 'PhotoPath',
		nullable: true,
		length: 255
	})
	photoPath: string | null;

	@ManyToOne(
		() => EmployeeEntity,
		(employees) => employees.employees,
		{
			onDelete: 'NO ACTION',
			onUpdate: 'NO ACTION'
		}
	)
	@JoinColumn([
		{ name: 'ReportsTo', referencedColumnName: 'employeeId' }
	])
	reportsTo2: EmployeeEntity;

	@OneToMany(
		() => EmployeeEntity,
		(employees) => employees.reportsTo2
	)
	employees: EmployeeEntity[];

	@ManyToMany(
		() => TerritoryEntity,
		(territories) => territories.employees
	)
	@JoinTable({
		name: 'employeeterritories',
		joinColumns: [
			{ name: 'EmployeeID', referencedColumnName: 'employeeId' }
		],
		inverseJoinColumns: [
			{ name: 'TerritoryID', referencedColumnName: 'territoryId' }
		],
		schema: 'northwind'
	})
	territories: TerritoryEntity[];

	@OneToMany(() => OrderEntity, (orders) => orders.employee)
	orders: OrderEntity[];
}
