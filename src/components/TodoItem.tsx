import type { TodoItemProps } from '../types';

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case '工作':
        return 'bg-red-100 text-red-800';
      case '学习':
        return 'bg-blue-100 text-blue-800';
      case '生活':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <div className="flex-1">
          <span className={`text-sm ${todo.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
            {todo.text}
          </span>
          {todo.category && (
            <span className={`ml-2 px-2 py-1 text-xs rounded-full ${getCategoryColor(todo.category)}`}>
              {todo.category}
            </span>
          )}
        </div>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="ml-4 p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
        aria-label="删除"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
} 