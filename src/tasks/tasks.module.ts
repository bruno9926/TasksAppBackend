import { Module } from "@nestjs/common";
import { TasksController } from "./tasks.controller";
import { TasksService } from "./tasks.service";
// database connection
import { TypeOrmModule } from "@nestjs/typeorm";
import { Task } from "./entities/task.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Task])],
    controllers: [TasksController],
    providers: [TasksService]
})
export class TasksModule {}
