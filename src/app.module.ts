import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import TasksModule from './tasks/tasks.module'; 
// database connection
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      }
    }),
    TasksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
