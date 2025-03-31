import { Todo } from "./todo.type";

export type TodoListContextType = {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
  addTodo: (todo: Omit<Todo, "id">) => void;
  removeTodo: (id: string) => void;
  updateTodo: (id: string, updatedTodo: Partial<Todo>) => void;
};
