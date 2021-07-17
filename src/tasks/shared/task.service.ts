import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {
    tasks : Task[] = [
        {id : 1,description : 'tarefa 1' , completed :  true},
        {id : 2,description : 'tarefa 2' , completed :  true},
        {id : 3,description : 'tarefa 3' , completed :  true},
        {id : 4,description : 'tarefa 4' , completed :  true},
    ]

    getAll(){
        return this.tasks;
    }

    getById(id : number){
        const task = this.tasks.find(  task => task.id = id);
        return task;
    }

    create(task : Task){
        let lastId = 0;
        if(this.tasks.length > 0){
            lastId = this.tasks[this.tasks.length -1].id;
        }

        task.id = lastId + 1;
        this.tasks.push(task)
        return task;
    }

    udpate(task : Task){
        const taskArray = this.getById(task.id);
        if(taskArray){
            taskArray.description = task.description;
            taskArray.completed = task.completed;
        }

        return taskArray;
    }

    delete(id){
        const index = this.tasks.findIndex(task => task.id == id);
        this.tasks.splice(index,1)
    }
}
