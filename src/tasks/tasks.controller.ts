import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { v4 as uuid } from 'uuid';
import { TasksService } from "./tasks.service";
import CreateTaskDto from "./tasks-dto/create-task.dto";

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

  // @Get('/:id')
  // getTask(@Param('id') id: string){
  //     let task = this.tasksService.getTask(id);
  //     return task
  // }

  // @Post()
  // createTask(@Body() task: CreateTaskDto){
  //     return this.tasksService.addTask(task)
  // }

  // @Put()
  // updateTask(@Body() task: Task) {
  //     return this.tasksService.updateTask(task);
  // }

  // @Delete('/:id')
  // deleteTask(@Param('id') id: string){
  //     return this.tasksService.deleteTask(id);
  // }

}