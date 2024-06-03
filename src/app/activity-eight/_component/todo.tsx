'use client';

import { useState } from 'react';
import { checkAction } from './check-action';
import { editTodo } from './editTodo';
import { deleteTodo } from './removeTodo-action';

export function TodoItem({ isCheck, id, todo }: { isCheck: boolean; id: number; todo: string }) {
  const [editMode, setEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);

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

  const handleSaveEdit = async (targetId: number, newTodo: string) => {
    await editTodo(targetId, newTodo);
    setEditMode(false);
  };

  return (
    <>
      <input
        type="checkbox"
        checked={isCheck}
        onChange={async () => {
          checkAction(id, isCheck);
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

      <button className="bg-red-800 text-black" onClick={async () => deleteTodo(id)}>
        remove
      </button>
    </>
  );
}
