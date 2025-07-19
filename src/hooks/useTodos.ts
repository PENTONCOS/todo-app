import { useState, useEffect } from 'react';
import type { Todo } from '../types';

const STORAGE_KEY = 'todos';

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt)
        }));
      } catch {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text: text.trim(),
      completed: false,
      category: getCategory(text),
      createdAt: new Date()
    };
    setTodos(prev => [...prev, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const getCategory = (text: string): string => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes('工作') || lowerText.includes('work') || lowerText.includes('项目')) {
      return '工作';
    }
    if (lowerText.includes('学习') || lowerText.includes('study') || lowerText.includes('读书')) {
      return '学习';
    }
    if (lowerText.includes('生活') || lowerText.includes('life') || lowerText.includes('购物')) {
      return '生活';
    }
    return '其他';
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo
  };
} 