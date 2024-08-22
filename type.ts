export interface Todo {
  _id: string;
  todo: string;
}

export interface TodoSate {
  todo: {
    todoList: Todo[];
  };
}
