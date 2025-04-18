import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
// types
import Task from './types/Task';
import CreateTaskDto from './tasks-dto/create-task.dto';
import UpdateTaskDto from './tasks-dto/update-task.dto';
// database connection
import { Task as TaskEntity } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(TaskEntity)
        private tasksRepository: Repository<TaskEntity>
    ) {}

    private _tasks: Task[] = [
        {
          "id": uuid(),
          "title": "Fist Task",
          "description": "que pasa si pongo un texto muy muy muy muy largo. El largo de la card no deberia verse afectado pero si su alto",
          "completed": false,
          "order": 0
        },
        {
          "id": uuid(),
          "title": "Second Task",
          "description": "getting used to it",
          "completed": false,
          "order": 1
        }
    ];

    get orderedTasks() {
        return [...this._tasks].sort((a, b) => a.order - b.order);
    }

    getTasks(): Promise<Task[]> {
        //return this.orderedTasks;
        return this.tasksRepository.find();
    }

    addTask(taskInput: CreateTaskDto): Task[] {
        let newTask: Task = {
            ...taskInput,
            id: uuid(),
            order: this._tasks.length
        }
        this._tasks.push(newTask);
        return this.orderedTasks;
    }

    updateTask(taskInput: UpdateTaskDto): Task[] {
        const index = this._tasks.findIndex(task => task.id === taskInput.id);
    
        if (index === -1) {
            throw new Error("Task not found");
        }
    
        this._tasks[index] = { ...this._tasks[index], ...taskInput };
    
        return this.orderedTasks;
    }

    deleteTask(id: string): Task[] {
        const index = this._tasks.findIndex(task => task.id === id);

        if (index === -1) {
            throw new Error("Task not found");
        }

        this._tasks.splice(index, 1);
        return this.orderedTasks;
    }
}