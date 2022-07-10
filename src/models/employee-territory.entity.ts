import { BaseEntity } from './../core/models/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'employeeterritories', schema: 'northwind' })
export class EmployeeTerritoryEntity extends BaseEntity {
	@Column('int', { primary: true, name: 'EmployeeID' })
	employeeId: number;

	@Column('varchar', { name: 'TerritoryID', length: 40 })
	territoryId: string;
}
