import { Module } from "@nestjs/common";
import { TasksController } from "./tasks.controller";

@Module({
    controllers: [TasksController]
})
class TasksModule {}

export default TasksModule