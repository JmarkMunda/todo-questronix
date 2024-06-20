import "./styles.css";
import { Props } from "./types";

const Modal = ({
  editId,
  inputValue,
  handleOnChangeText,
  handleClose,
  handleSubmit,
}: Props) => {
  return (
    <div className="backdrop">
      <div className="content">
        <h3 style={{ marginBottom: 16 }}>{editId ? "Edit" : "Add"} Todo</h3>
        <input
          placeholder="Enter value here"
          value={inputValue}
          onChange={(e) => handleOnChangeText(e.currentTarget.value)}
          style={{ padding: 8, width: "100%" }}
        />

        <div className="footer-buttons">
          <button className="cancel-btn" onClick={handleClose}>
            Cancel
          </button>
          <button className="submit-btn" onClick={handleSubmit}>
            {editId ? "Edit" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
