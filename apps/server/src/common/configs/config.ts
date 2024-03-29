import type { Config } from './config.interface';

const config: Config = {
  nest: {
    port: 4000,
    url: 'http://localhost:4000',
  },
  cors: {
    enabled: true,
    origins: ['http://localhost:3000'],
  },
  mail: {
    clientId:
      '979855681822-ogjn6q5cupbcbu3m3hblvctcl4produs.apps.googleusercontent.com',
    clientSecret: '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',
    email: 'shahriazkobir@gmail.com',
    refreshToken:
      '1//04MhPF4AK9zjyCgYIARAAGAQSNwF-L9Ir4e0hPgPnBTr1dE6wENGvOMPdMXu1bJcW6tSkhUb-aw_xfHUj_uT5xHpHI8hS9AT1zFg',
  },
  db: {
    database: 'counter-top-dev',
    host: 'localhost',
    password: '',
    port: 3306,
    type: 'mysql',
    username: 'root',
  },
  swagger: {
    enabled: true,
    title: 'Nestjs API',
    description: 'The nestjs API description',
    version: '1.5',
    path: 'api',
  },
  session: {
    resave: false,
    saveUninitialized: false,
    secret: 'my-secret',
  },
  security: {
    expiresIn: '200m',
    refreshIn: '7d',
    bcryptSaltOrRound: 10,
    refreshSecret: 'my-refresh-secret',
    accessSecret: 'my-access-secret',
    jwtSecret: 'my-jwt-secret',
  },
};

export default (): Config => config;
