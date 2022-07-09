import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
	@PrimaryGeneratedColumn()
	id?: string;

	@Column()
	username?: null | string;

	@Column()
	password?: null | string;

	@Column()
	email?: null | string;

	@Column({ default: true })
	isActive: boolean;

	@Column()
	access_token?: null | string;

	@Column()
	refresh_token?: null | string;
}
