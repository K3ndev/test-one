import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { type Todo, type TodoStore } from './activity-eight-store-type';

export const useTodoStore = create(
  immer<TodoStore>((set, get) => ({
    //state
    todos: [
      { todo: 'sample 1', id: 1, isCheck: false },
      { todo: 'sample 2', id: 2, isCheck: true },
    ],

    //functions
    toggleCheck: (todoId: number) => {
      set(state => {
        const todoIndex = state.todos.findIndex(todo => todo.id === todoId);
        if (todoIndex !== -1) {
          state.todos[todoIndex].isCheck = !state.todos[todoIndex].isCheck;
        }
      });
      localStorage.setItem('todo-data', JSON.stringify(get().todos));
    },
    addTodo: (newTodo: Todo) => {
      set(state => {
        state.todos.push(newTodo);
      });
      localStorage.setItem('todo-data', JSON.stringify(get().todos));
    },
    removeTodo: (todoId: number) => {
      set(state => {
        state.todos = state.todos.filter(todo => todo.id !== todoId);
      });
      localStorage.setItem('todo-data', JSON.stringify(get().todos));
    },
    editTodo: (todoId: number, newTodoText: string) => {
      set(state => {
        const todoIndex = state.todos.findIndex(todo => todo.id === todoId);
        if (todoIndex !== -1) {
          state.todos[todoIndex].todo = newTodoText;
        }
      });
      localStorage.setItem('todo-data', JSON.stringify(get().todos));
    },
  }))
);
