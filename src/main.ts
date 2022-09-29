import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('First Nest Api')
    .setDescription('REST API Documentation')
    .setVersion('1.0.0')
    .addTag('blurryface')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT);
}

bootstrap();
