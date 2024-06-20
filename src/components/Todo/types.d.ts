export type TodoType = {
  id: number;
  name: string;
};

export type Prop = {
  item: TodoType;
  handleEdit: (id: number) => void;
  handleDelete: (id: number) => void;
};
