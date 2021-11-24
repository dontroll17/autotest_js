const {writeFile} = require('fs').promises;

class Todos {
    constructor() {
        this.todos = [];
    }

    list() {
        return [...this.todos];
    }

    add(title) {
        let todo = {
            title: title,
            completed: false,
        }

        this.todos.push(todo);
    }

    complete(title) {
        if(this.todos.length === 0){
            throw new Error('You have no TODO stored. Add new one!')
        }

        let todoFound = false;
        this.todos.forEach((todo) => {
            if (todo.title === title) {
                todo.completed = true;
                todoFound = true;
                return;
            }
        });

        if (!todoFound) {
            throw new Error(`No TODO was found with the title: "${title}"`);
        }
    }

    saveToFile() {
        let fileCtx = 'Title completed\n';
        this.todos.forEach((todo) => {
            fileCtx += `${todo.title} ${todo.completed}\n`;
        });

        return writeFile('todos.csv', fileCtx);
    }
}

module.exports = Todos;