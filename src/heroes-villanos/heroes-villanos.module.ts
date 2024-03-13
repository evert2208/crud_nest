import { Module } from '@nestjs/common';
import { HeroesVillanosService } from './heroes-villanos.service';
import { HeroesVillanosController } from './heroes-villanos.controller';
import { HeroesVillanos } from './entities/heroes-villano.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([HeroesVillanos])],
  controllers: [HeroesVillanosController],
  providers: [HeroesVillanosService],
})
export class HeroesVillanosModule {}
