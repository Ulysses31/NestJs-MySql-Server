import { BaseEntity } from './../core/models/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { TerritoryEntity } from './territory.entity';

@Entity({ name: 'region', schema: 'northwind' })
export class RegionEntity extends BaseEntity {
	@Column('int', { primary: true, name: 'RegionID' })
	regionId: number;

	@Column('char', { name: 'RegionDescription', length: 50 })
	regionDescription: string;

	@OneToMany(
		() => TerritoryEntity,
		(territories) => territories.region
	)
	territories: TerritoryEntity[];
}
