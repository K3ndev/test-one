'use client';
import { useTodoStore } from '@/app/_store/activity-eight-store';
import { useState } from 'react';

export function TodoItem({ isCheck, id, todo }: { isCheck: boolean; id: number; todo: string }) {
  const { toggleCheck, removeTodo, editTodo } = useTodoStore();
  const [editMode, setEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);
  // const todoDataLocal = localStorage.getItem('todo-data');

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTodo(e.target.value);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedTodo(todo);
  };

  const handleSaveEdit = (targetId: number, newTodo: string) => {
    editTodo(targetId, newTodo);
    setEditMode(false);
  };

  return (
    <>
      <input
        type="checkbox"
        checked={isCheck}
        onChange={() => {
          toggleCheck(id);
        }}
      />
      {editMode ? (
        <input type="text" value={editedTodo} onChange={handleInputChange} />
      ) : (
        <p>{todo}</p>
      )}
      {editMode ? (
        <>
          <button
            className="bg-blue-800 text-white"
            onClick={() => {
              handleSaveEdit(id, editedTodo);
            }}
          >
            Save
          </button>
          <button className="bg-blue-800 text-white" onClick={handleCancelEdit}>
            Cancel
          </button>
        </>
      ) : (
        <button className="bg-green-800 text-white" onClick={handleEdit}>
          Edit
        </button>
      )}

      <button
        className="bg-red-800 text-black"
        onClick={() => {
          removeTodo(id);
        }}
      >
        remove
      </button>
    </>
  );
}
