import { Empty, List } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import type { TodoListProps } from '../types';
import { TodoItem } from './TodoItem';

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <Empty
        image={<CheckCircleOutlined style={{ fontSize: 64, color: '#d9d9d9' }} />}
        description={
          <span className="text-gray-500">
            <div className="text-lg font-medium text-gray-900 mb-1">暂无待办事项</div>
            <div className="text-sm">开始添加您的第一个任务吧！</div>
          </span>
        }
        className="py-12"
      />
    );
  }

  return (
    <List
      dataSource={todos}
      renderItem={(todo) => (
        <List.Item className="!px-0 !py-0 border-none">
          <TodoItem
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        </List.Item>
      )}
      className="space-y-0"
    />
  );
} 