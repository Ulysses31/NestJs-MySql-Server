import { BaseEntity } from './../core/models/base.entity';
import { RegionEntity } from './region.entity';
import { EmployeeEntity } from './employee.entity';
import {
	Column,
	Entity,
	Index,
	JoinColumn,
	ManyToMany,
	ManyToOne
} from 'typeorm';

@Index('FK_Territories_Region', ['regionId'], {})
@Entity({ name: 'territories', schema: 'northwind' })
export class TerritoryEntity extends BaseEntity {
	@Column('varchar', {
		primary: true,
		name: 'TerritoryID',
		length: 20
	})
	territoryId: string;

	@Column('char', { name: 'TerritoryDescription', length: 50 })
	territoryDescription: string;

	@Column('int', { name: 'RegionID' })
	regionId: number;

	@ManyToMany(
		() => EmployeeEntity,
		(employees) => employees.territories
	)
	employees: EmployeeEntity[];

	@ManyToOne(() => RegionEntity, (region) => region.territories, {
		onDelete: 'NO ACTION',
		onUpdate: 'NO ACTION'
	})
	@JoinColumn([
		{ name: 'RegionID', referencedColumnName: 'regionId' }
	])
	region: RegionEntity;
}
