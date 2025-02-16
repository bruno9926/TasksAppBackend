import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import TasksModule from './tasks/tasks.module'; 

@Module({
  imports: [ConfigModule.forRoot(), TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
