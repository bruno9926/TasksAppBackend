import { Controller, Get, Post, Put, Delete, Body, Param} from "@nestjs/common";
import { v4 as uuid } from 'uuid';

@Controller('tasks')
export class TasksController {

    @Get('/')
    getAllTasks() {
        const tasks = [
            {
              "id": uuid(),
              "title": "Fist Task",
              "description": "que pasa si pongo un texto muy muy muy muy largo. El largo de la card no deberia verse afectado pero si su alto",
              "completed": false
            },
            {
              "id": uuid(),
              "title": "Second Task",
              "description": "getting used to it",
              "completed": true
            }
          ];
        return tasks
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