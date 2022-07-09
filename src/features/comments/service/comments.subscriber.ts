import { CommentEntity } from './../../../models/comment.entity';
import { BaseSubscriber } from './../../../core/services/base.subscriber';
import { EventSubscriber } from 'typeorm';

@EventSubscriber()
export class CommentsSubscriber extends BaseSubscriber<CommentEntity> {
	constructor() {
		super()
	}

	// beforeInsert(event: InsertEvent<any>) {
	// 	console.log(`CommentsSubscriber says... BEFORE POST INSERTED: `, event.entity);
	// }

	// afterInsert(event: InsertEvent<any>) {
	// 	console.log(`CommentsSubscriber says... AFTER ENTITY INSERTED: `, event.entity);
	// }
}
