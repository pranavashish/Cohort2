/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(todos = []) {
    this.todos = todos;
  }

  add(a) {
    this.todos.push(a);
    return this.todos;
  }

  remove(i) {
    if (i >= 0 && i < this.todos.length) {
      this.todos.splice(i, 1);
    }
    return this.todos;
  }

  update(i, a) {
    if (i >= 0 && i < this.todos.length) {
      this.todos[i] = a;
    }
    return this.todos;
  }

  getAll() {
    return this.todos;
  }

  get(i) {
    if (i >= 0 && i < this.todos.length) {
      return this.todos[i];
    }
    return null;
  }

  clear() {
    this.todos = [];
    return this.todos;
  }
}

module.exports = Todo;

let todoList = new Todo();

todoList.add("Task 1");
todoList.add("Task 2");
todoList.add("Task 3");

console.log(todoList.getAll()); // Output: ["Task 1", "Task 2", "Task 3"]

// Comparing arrays by converting them to strings
console.log(
  JSON.stringify(todoList.getAll()) ===
    JSON.stringify(["Task 1", "Task 2", "Task 3"])
);
