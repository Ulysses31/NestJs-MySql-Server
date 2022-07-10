import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/core/models/user.entity';

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

	async findOne(username: string): Promise<UserEntity | undefined> {
		return this.users.find(
			(user: UserEntity) => user.username === username
		);
	}

	async getUserByEmail(
		email: string
	): Promise<UserEntity | undefined> {
		return this.users.find(
			(user: UserEntity) => user.email === email
		);
	}

	async updateUsersTokens(
		id: string,
		access_token: string,
		refresh_token: string
	): Promise<UserEntity | undefined> {
		var usr: UserEntity = this.users.find((item) => item.id === id);
		usr.access_token = access_token;
		usr.refresh_token = refresh_token;
		return usr;
	}
}
