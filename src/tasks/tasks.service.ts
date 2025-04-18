import { Injectable } from '@nestjs/common';
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

    orderTasks(tasks: Task[]): Task[] {
        return tasks.sort((a, b) => a.order - b.order);
    }

    async getTasks(): Promise<Task[]> {
        return this.tasksRepository.find()
        .then(this.orderTasks);
    }

    async addTask(taskInput: CreateTaskDto): Promise<Task[]> {
        let numberOfTasks = await this.tasksRepository.count()
        await this.tasksRepository.save({
            ...taskInput,
            order: numberOfTasks
        });
        return this.getTasks();
    }

    async updateTask(taskInput: UpdateTaskDto): Promise<Task[]> {
        await this.tasksRepository.update(taskInput.id, taskInput);
        return this.getTasks();
    }

    async deleteTask(id: string): Promise<Task[]> {
        await this.tasksRepository.delete(id);
        return this.getTasks();
    }
}