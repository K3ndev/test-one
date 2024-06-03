import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { type Todo, type TodoStore } from './activity-five-store-type';

export const useTodoStore = create(
  immer<TodoStore>(set => ({
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
    },
    addTodo: (newTodo: Todo) => {
      set(state => {
        state.todos.push(newTodo);
      });
    },
    removeTodo: (todoId: number) => {
      set(state => {
        state.todos = state.todos.filter(todo => todo.id !== todoId);
      });
    },
    editTodo: (todoId: number, newTodoText: string) => {
      set(state => {
        const todoIndex = state.todos.findIndex(todo => todo.id === todoId);
        if (todoIndex !== -1) {
          state.todos[todoIndex].todo = newTodoText;
        }
      });
    },
  }))
);
