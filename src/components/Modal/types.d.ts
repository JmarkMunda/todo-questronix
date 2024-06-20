export type Props = {
  editId: number | null;
  inputValue: string;
  handleOnChangeText: (value: string) => void;
  handleClose: () => void;
  handleSubmit: () => void;
};
