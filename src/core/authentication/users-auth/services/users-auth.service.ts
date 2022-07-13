import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/core/models/user.entity';

/**
 * UsersAuthService
 */
@Injectable()
export class UsersAuthService {
	private readonly users: UserEntity[] = [
		{
			id: '1',
			username: 'john',
			password: 'changeme',
			email: 'admin@test.com',
			is_active: true,
			access_token: '',
			refresh_token: ''
		},
		{
			id: '2',
			username: 'maria',
			password: 'guess',
			email: 'user@test.com',
			is_active: true,
			access_token: '',
			refresh_token: ''
		}
	];

	/**
	 * Find by username
	 * @param username string
	 * @returns Promise<UserEntity | undefined>
	 */
	async findOne(username: string): Promise<UserEntity | undefined> {
		return this.users.find(
			(user: UserEntity) => user.username === username
		);
	}

	/**
	 * Find by email
	 * @param email string
	 * @returns Promise<UserEntity | undefined>
	 */
	async findByEmail(email: string): Promise<UserEntity | undefined> {
		return this.users.find(
			(user: UserEntity) => user.email === email
		);
	}

	/**
	 * UupdateUsersTokens
	 * @param id string
	 * @param access_token string
	 * @param refresh_token string
	 * @returns Promise<UserEntity | undefined>
	 */
	async updateUsersTokens(
		id: string,
		access_token: string,
		refresh_token: string
	): Promise<UserEntity | undefined> {
		const usr: UserEntity = this.users.find((item) => item.id === id);
		usr.access_token = access_token;
		usr.refresh_token = refresh_token;
		return usr;
	}
}
