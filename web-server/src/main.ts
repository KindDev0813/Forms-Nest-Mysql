import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials:true,
    origin:true
  })
  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: true,
      cookie:{maxAge:60000*6000*24}
    }),
  )
  await app.listen(4005);
}
bootstrap();
