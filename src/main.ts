import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      validationError: { target: false }, 
    })
  );
   
  await app.listen(process.env.PORT_LOCAL,()=> {
    console.log(`corriendo en puerto ${process.env.PORT_LOCAL}`)
  });
}
bootstrap();
