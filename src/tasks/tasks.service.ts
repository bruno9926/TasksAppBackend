import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
// types
import Task from './types/Task';
import CreateTaskDto from './tasks-dto/create-task.dto';

@Injectable()
export class TasksService {

    private tasks: Task[] = [
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

    getTasks(): Task[] {
        return this.tasks;
    }

    addTask(taskInput: CreateTaskDto): Task[] {
        let newTask: Task = {
            ...taskInput,
            id: uuid(),
        }
        this.tasks.push(newTask);
        return this.tasks;
    }

}