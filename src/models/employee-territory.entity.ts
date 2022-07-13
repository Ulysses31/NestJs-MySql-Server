import { BaseCoreEntity } from 'src/core/models/base.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

/**
 * EmployeeTerritoryEntity entity
 */
@Entity({ name: 'employeeterritories', schema: 'northwind' })
export class EmployeeTerritoryEntity extends BaseCoreEntity {
	@PrimaryColumn('int', { name: 'ID' })
	id: string;

	@Column('int', { name: 'EmployeeID', primary: false })
	employeeId: number;

	@Column('varchar', {
		name: 'TerritoryID',
		length: 40,
		primary: false
	})
	territoryId: string;
}
