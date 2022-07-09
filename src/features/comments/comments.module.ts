import { CommentEntity } from './../../models/comment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsRepository } from './service/comments-repository';
import { Module } from '@nestjs/common';
import { CommentService } from './service/comments.service';
import { CommentsBrowserController } from './comments-browser/Comments-browser.controller';
import { CommentsEditorController } from './comments-editor/comments-editor.controller';
import { CommentsSubscriber } from './service/comments.subscriber';

@Module({
	imports: [
		TypeOrmModule.forFeature([CommentEntity])
	],
	controllers: [CommentsBrowserController, CommentsEditorController],
	providers: [CommentService, CommentsRepository, CommentsSubscriber]
})
export class CommentModule {}
