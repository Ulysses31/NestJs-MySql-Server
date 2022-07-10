import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
	@PrimaryGeneratedColumn()
	id?: string;

	@Column({ type: 'varchar', length: 20 })
	username?: null | string;

	@Column({ type: 'varchar', length: 50 })
	password?: null | string;

	@Column({ type: 'varchar', length: 200 })
	email?: null | string;

	@Column({ type: 'tinyint', default: true })
	is_active: boolean;

	@Column({ type: 'varchar', length: 200 })
	access_token?: null | string;

	@Column({ type: 'varchar', length: 200 })
	refresh_token?: null | string;
}
