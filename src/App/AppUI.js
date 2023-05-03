import React from "react";
import { TodoCounter } from "../Todos/TodoCounter";
import { TodoSearch } from "../Todos/TodoSearch";
import { TodoList } from "../Todos/TodoList";
import { TodoItem } from "../Todos/TodoItem";
import { CreateTodoButtom } from "../Todos/CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import {TodoForm} from '../TodoForm';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    deleteTodo,
    completeTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Hubo un error</p>}
        {loading && <p>Estamos cargando</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer todo</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal ? (
        <Modal>
          <TodoForm />
        </Modal>
      ) : ('')}

      <CreateTodoButtom
        setOpenModal={setOpenModal}
      />
    </>
  );
}

export { AppUI };
