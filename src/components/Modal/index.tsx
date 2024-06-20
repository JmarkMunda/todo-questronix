type Props = {
  editId: number | null;
  inputValue: string;
  handleOnChangeText: (value: string) => void;
  handleClose: () => void;
  handleSubmit: () => void;
};

const Modal = ({
  editId,
  inputValue,
  handleOnChangeText,
  handleClose,
  handleSubmit,
}: Props) => {
  return (
    <div
      style={{
        background: "rgba(0, 0, 0, 0.555)",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div
        style={{
          background: "white",
          padding: 16,
          borderRadius: 16,
          width: "20vw",
        }}>
        <h3 style={{ marginBottom: 16 }}>{editId ? "Edit" : "Add"} Todo</h3>
        <input
          placeholder="Enter value here"
          value={inputValue}
          onChange={(e) => handleOnChangeText(e.currentTarget.value)}
          style={{ padding: 8, width: "100%" }}
        />

        <div
          style={{
            marginTop: 16,
            display: "flex",
            justifyContent: "space-evenly",
          }}>
          <button style={{ background: "#d3d3d3" }} onClick={handleClose}>
            Cancel
          </button>
          <button style={{ background: "#4af575" }} onClick={handleSubmit}>
            {editId ? "Edit" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
