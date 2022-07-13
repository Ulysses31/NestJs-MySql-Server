import { RegionEntity } from './../../models/region.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { RegionsBrowserController } from './regions-browser/regions-browser.controller';
import { RegionsEditorController } from './regions-editor/regions-editor.controller';
import { RegionsService } from './service/regions.service';
import { RegionsSubscriber } from './service/regions.subscriber';
import { RegionsRepository } from './service/regions-repository';

@Module({
	imports: [TypeOrmModule.forFeature([RegionEntity])],
	controllers: [RegionsBrowserController, RegionsEditorController],
	providers: [RegionsService, RegionsRepository, RegionsSubscriber]
})
export class RegionModule {}
