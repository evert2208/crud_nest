import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesVillanosModule } from './heroes-villanos/heroes-villanos.module';
import { HeroesVillanos } from './heroes-villanos/entities/heroes-villano.entity';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    SequelizeModule.forRootAsync({
      useFactory: ()=>({
        dialect: 'postgres',
        host: process.env.HOST,
        port: +process.env.PORT,
        username: process.env.BD_USERNAME,
        password: process.env.BD_CLAVE,
        database: process.env.BD_NAME,
        autoLoadModels: true,
        synchronize: true,
        models: [HeroesVillanos],
      })
     
    }),
 
    HeroesVillanosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
