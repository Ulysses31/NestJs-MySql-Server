import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { CommentEntity } from 'src/models/comment.entity';
import { Repository } from 'typeorm';
import { CommentsRepository } from './comments-repository';

@Injectable()
export class CommentService extends BaseService<CommentEntity> {
	constructor(
		@InjectRepository(CommentsRepository)
		public readonly bsRepo: Repository<CommentEntity>
	) {
		super(bsRepo);
	}
}
