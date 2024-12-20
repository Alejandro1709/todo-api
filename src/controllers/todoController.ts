import type { Request, Response } from "express";
import type ITodo from "../types/todo";

const todos: ITodo[] = [
  {
    id: 1,
    title: "Testing",
    description: "This is just a test",
    status: "pending",
    createdAt: new Date(),
  },
  {
    id: 2,
    title: "Take a Shower",
    description: "Reminder to take a shower",
    status: "in-progress",
    createdAt: new Date(),
  },
];

// GET all todos and returns an array
export const getTodos = (_req: Request, res: Response) => {
  res.status(200).json(todos);
};

// GET single todo by its id and returns the todo
export const getTodo = (req: Request, res: Response): void => {
  const { id } = req.params;

  const foundTodo = todos.find((t) => t.id === +id);

  res.status(200).json(foundTodo);
};

// POST a new todo and returns the newly created todo
export const createTodo = (req: Request, res: Response) => {
  const { title, description, status } = req.body;

  const newTodo = {
    id: todos.length + 1,
    title,
    description,
    status,
    createdAt: new Date(),
  };

  todos.push(newTodo);

  res.status(201).json(todos);
};

// PUT a todo and returns the updated todo
export const updateTodo = (req: Request, res: Response): void => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  const foundTodo = todos.find((t) => t.id === +id);

  const updatedTodo = {
    id: foundTodo?.id,
    title: title || foundTodo?.title,
    description: description || foundTodo?.description,
    status: status || foundTodo?.status,
    createdAt: foundTodo?.createdAt,
  };

  res.status(200).json(updatedTodo);
};

// DELETE a todo and returns the updated todos array
export const deleteTodo = (req: Request, res: Response): void => {
  const { id } = req.params;

  const foundTodo = todos.find((t) => t.id === +id);

  const filtered = todos.filter((t) => t.id !== foundTodo?.id);

  res.status(200).json(filtered);
};
