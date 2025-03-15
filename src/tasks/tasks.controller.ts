import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import CreateTaskDto from "./tasks-dto/create-task.dto";
import UpdateTaskDto from "./tasks-dto/update-task.dto";

@Controller('tasks')
export class TasksController {

  constructor(private tasksService: TasksService) { }

  @Get('/')
  getAllTasks() {
    return this.tasksService.getTasks();
  }

  @Post()
  createTask(@Body() taskInput: CreateTaskDto) {
    return this.tasksService.addTask(taskInput);
  }

  @Put('/:id')
  updateTask(@Param('id') id: string, @Body() task: UpdateTaskDto) {
      return this.tasksService.updateTask({...task, id});
  }

  // @Get('/:id')
  // getTask(@Param('id') id: string){
  //     let task = this.tasksService.getTask(id);
  //     return task
  // }

  // @Post()
  // createTask(@Body() task: CreateTaskDto){
  //     return this.tasksService.addTask(task)
  // }

  @Delete('/:id')
  deleteTask(@Param('id') id: string){
      return this.tasksService.deleteTask(id);
  }

}