import { Checkbox, Button, Tag, Space, Typography } from 'antd';
import { DeleteOutlined, CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';
import type { TodoItemProps } from '../types';

const { Text } = Typography;

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case '工作':
        return 'red';
      case '学习':
        return 'blue';
      case '生活':
        return 'green';
      default:
        return 'default';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case '工作':
        return <CheckCircleOutlined />;
      case '学习':
        return <ClockCircleOutlined />;
      case '生活':
        return <CheckCircleOutlined />;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 mb-3">
      <div className="flex items-center gap-3 flex-1">
        <Checkbox
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="text-blue-600"
        />
        <div className="flex-1">
          <Text
            delete={todo.completed}
            className={`text-base ${todo.completed ? 'text-gray-500' : 'text-gray-900'}`}
          >
            {todo.text}
          </Text>
          {todo.category && (
            <Tag
              color={getCategoryColor(todo.category)}
              icon={getCategoryIcon(todo.category)}
              className="ml-2"
            >
              {todo.category}
            </Tag>
          )}
        </div>
      </div>
      <Space>
        <Button
          type="text"
          danger
          icon={<DeleteOutlined />}
          onClick={() => onDelete(todo.id)}
          className="hover:bg-red-50"
          size="small"
        />
      </Space>
    </div>
  );
} 