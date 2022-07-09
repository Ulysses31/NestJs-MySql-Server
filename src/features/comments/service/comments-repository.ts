import { CommentEntity } from './../../../models/comment.entity';
import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class CommentsRepository<
	CommentEntity
> extends Repository<CommentEntity> {
	constructor(public manager: EntityManager) {
		super(CommentEntity, manager);
	}
}
