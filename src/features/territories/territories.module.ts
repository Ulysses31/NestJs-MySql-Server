import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TerritoryEntity } from 'src/models/territory.entity';
import { TerritoriesRepository } from './service/territories-repository';
import { TerritoriesService } from './service/territories.service';
import { TerritoriesSubscriber } from './service/territories.subscriber';
import { TerritoriesBrowserController } from './territories-browser/territories-browser.controller';
import { TerritoriesEditorController } from './territories-editor/territories-editor.controller';

@Module({
	imports: [TypeOrmModule.forFeature([TerritoryEntity])],
	controllers: [
		TerritoriesBrowserController,
		TerritoriesEditorController
	],
	providers: [
		TerritoriesService,
		TerritoriesRepository,
		TerritoriesSubscriber
	]
})
export class TerritoryModule {}
