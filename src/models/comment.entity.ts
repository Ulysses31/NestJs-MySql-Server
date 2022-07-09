import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './../core/models/base.entity';

@Entity({ name: 'comments' })
export class CommentEntity extends BaseEntity {
	@ApiProperty({
		type: String,
		description: 'ID',
		nullable: false,
		required: true
	})
	@PrimaryGeneratedColumn()
	id?: null | string;

	@ApiProperty({
		type: String,
		description: 'Comments postId',
		nullable: false,
		required: true
	})
	@Column()
	postId?: null | string;

	@ApiProperty({
		type: String,
		description: 'Comments name',
		nullable: false,
		required: true
	})
	@Column()
	name?: null | string;

	@ApiProperty({
		type: String,
		description: 'Comments email',
		nullable: false,
		required: true
	})
	@Column()
	email?: null | string;

	@ApiProperty({
		type: String,
		description: 'Comments body',
		nullable: false,
		required: true
	})
	@Column()
	body?: null | string;
}
