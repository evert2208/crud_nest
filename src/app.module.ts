import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesVillanosModule } from './heroes-villanos/heroes-villanos.module';
import { HeroesVillanos } from './heroes-villanos/entities/heroes-villano.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'aws-0-us-west-1.pooler.supabase.com',
      port: 5432,
      username: 'postgres.vnmwutsnsyqwpgtgsdvu',
      password: '4KrFFUaSxjkjyAJe',
      database: 'postgres',
      autoLoadModels: true,
      synchronize: true,
      models: [HeroesVillanos],
    }),
    HeroesVillanosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
