import { Get } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { Task } from './shared/task';
import { TaskService } from './shared/task.service';

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TaskService
    ) { }

    @Get()
    async getAll() : Promise<Task[]> {
        return this.taskService.getAll();
    }
   
    @Get(':id')
    async getById(@Param('id') id:number) : Promise<Task> {
        return this.taskService.getById(id);
    }
}

