import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { ConfigService } from '@nestjs/config';
import * as compression from 'compression';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';
import * as fs from 'fs';
import {
  NestConfig,
  CorsConfig,
  SwaggerConfig,
  SessionConfig,
} from '@server/common/configs/config.interface';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const nestConfig = configService.get<NestConfig>('nest')!;
  const corsConfig = configService.get<CorsConfig>('cors')!;
  const swaggerConfig = configService.get<SwaggerConfig>('swagger')!;
  const sessionConfig = configService.get<SessionConfig>('session')!;

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: false,
    }),
  );

  if (corsConfig.enabled) {
    app.enableCors({
      origin: corsConfig.origins[0],
      credentials: true,
    });
  }
  app.use(helmet());
  app.use(cookieParser());
  app.use(compression());
  app.enableVersioning({
    type: VersioningType.URI,
  });

  app.use(
    session({
      secret: sessionConfig.secret,
      resave: sessionConfig.resave,
      saveUninitialized: sessionConfig.saveUninitialized,
    }),
  );

  if (swaggerConfig.enabled) {
    const config = new DocumentBuilder()
      .setTitle(swaggerConfig.title)
      .setDescription(swaggerConfig.description)
      .setVersion(swaggerConfig.version)
      .addServer(`http://localhost:${nestConfig.port}/`, 'Local environment')
      .addServer('https://staging.yourapi.com/', 'Staging')
      .addServer('https://production.yourapi.com/', 'Production')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);
    fs.writeFileSync('./swagger-spec.json', JSON.stringify(document));
    SwaggerModule.setup(swaggerConfig.path, app, document);
  }

  await app.listen(nestConfig.port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
