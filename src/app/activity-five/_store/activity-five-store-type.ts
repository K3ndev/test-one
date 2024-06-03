export type Todo = {
  todo: string;
  id: number;
  isCheck: boolean;
};
export type TodoStore = {
  todos: Todo[];
  toggleCheck: (todoId: number) => void;
  addTodo: (newTodo: Todo) => void;
  removeTodo: (todoId: number) => void;
  editTodo: (todoId: number, newTodoText: string) => void;
};
