export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  category?: string;
  createdAt: Date;
}

export interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export interface AddTodoProps {
  onAdd: (text: string) => void;
}

export interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
} 