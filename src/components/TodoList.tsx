import { Empty, List, Typography } from 'antd';
import { CheckCircleOutlined, SmileOutlined } from '@ant-design/icons';
import type { TodoListProps } from '../types';
import { TodoItem } from './TodoItem';

const { Text } = Typography;

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <SmileOutlined className="text-4xl text-blue-500" />
        </div>
        <div className="space-y-2">
          <Text className="text-2xl font-bold text-gray-800 block">
            开始您的第一个任务
          </Text>
          <Text className="text-gray-500 text-lg block">
            添加任务，让每一天都充满成就感
          </Text>
        </div>
      </div>
    );
  }

  const completedTodos = todos.filter(todo => todo.completed);
  const activeTodos = todos.filter(todo => !todo.completed);

  return (
    <div className="space-y-6">
      {/* 进行中的任务 */}
      {activeTodos.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            <Text className="text-lg font-semibold text-gray-800">
              进行中 ({activeTodos.length})
            </Text>
          </div>
          <div className="space-y-3">
            {activeTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))}
          </div>
        </div>
      )}

      {/* 已完成的任务 */}
      {completedTodos.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <Text className="text-lg font-semibold text-gray-800">
              已完成 ({completedTodos.length})
            </Text>
          </div>
          <div className="space-y-3 opacity-75">
            {completedTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 