import { Prop } from "./types";
import "./styles.css";

const Todo = ({ item, handleEdit, handleDelete }: Prop) => {
  return (
    <div className="card">
      <div className="details">
        <p>{item.name} </p>
      </div>
      <div className="buttons">
        <button className="button" onClick={() => handleEdit(item.id)}>
          Edit
        </button>
        <button className="button" onClick={() => handleDelete(item.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
