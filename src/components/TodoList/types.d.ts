import { TodoType } from "../Todo/types";

export type Props = {
  todos: TodoType[];
  handleEdit: (id: number) => void;
  handleDelete: (id: number) => void;
};
