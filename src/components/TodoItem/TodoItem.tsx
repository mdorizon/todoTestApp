import { Todo, TodoId } from "@/types/todo.type";
import { TableCell, TableRow } from "../ui/table";
import { Button } from "../ui/button";

const TodoItem = ({
  item,
  handleUpdate,
  handleDelete,
}: {
  item: Todo;
  handleUpdate: (id: TodoId) => void;
  handleDelete: (id: TodoId) => void;
}) => {
  const { id, label, status } = item;
  return (
    <TableRow data-testid="todo-list-item">
      <TableCell>{label}</TableCell>
      <TableCell>{status}</TableCell>
      <TableCell className="flex justify-end">
        <Button
          onClick={() => handleUpdate(id)}
          style={{
            cursor: "pointer",
          }}
        >
          Modifier
        </Button>
        <Button
          onClick={() => handleDelete(id)}
          style={{
            cursor: "pointer",
            backgroundColor: "red",
          }}
          data-testid="todo-delete"
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default TodoItem;
