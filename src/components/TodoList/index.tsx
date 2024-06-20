import { Props } from "./types";
import Todo from "../Todo";

const TodoList = ({ todos, handleEdit, handleDelete }: Props) => {
  return (
    <div style={{ width: "50vw", margin: "16px" }}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          item={todo}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
