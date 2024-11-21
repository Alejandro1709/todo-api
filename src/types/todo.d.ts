type Status = "pending" | "in-progress" | "completed";

export default interface ITodo {
  id: number;
  title: string;
  description: string;
  status: Status;
  createdAt: Date;
}
