import { Checkbox, Button, Tag, Space, Typography, Tooltip } from 'antd';
import { DeleteOutlined, CheckCircleOutlined, ClockCircleOutlined, HeartOutlined, BookOutlined, HomeOutlined } from '@ant-design/icons';
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
        return <BookOutlined />;
      case '生活':
        return <HomeOutlined />;
      default:
        return <HeartOutlined />;
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('zh-CN', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className={`
      group relative p-6 bg-white border-2 border-gray-100 rounded-2xl shadow-sm 
      hover:shadow-xl hover:border-blue-200 transition-all duration-300 mb-4
      ${todo.completed ? 'opacity-75' : ''}
    `}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1">
          <Checkbox
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="text-blue-600 scale-125"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <Text
                delete={todo.completed}
                className={`
                  text-lg font-medium block mb-2 transition-all duration-300
                  ${todo.completed ? 'text-gray-400 line-through' : 'text-gray-800'}
                `}
              >
                {todo.text}
              </Text>

              <div className="flex items-center gap-3 flex-wrap">
                {todo.category && (
                  <Tag
                    color={getCategoryColor(todo.category)}
                    icon={getCategoryIcon(todo.category)}
                    className="rounded-full px-3 py-1 text-sm font-medium"
                  >
                    {todo.category}
                  </Tag>
                )}

                <Text className="text-gray-500 text-sm">
                  {formatDate(todo.createdAt)}
                </Text>
              </div>
            </div>

            <div className="flex-shrink-0 ml-4">
              <Tooltip title="删除任务">
                <Button
                  type="text"
                  danger
                  icon={<DeleteOutlined />}
                  onClick={() => onDelete(todo.id)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-50 rounded-full"
                  size="large"
                />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>

      {/* 完成状态指示器 */}
      {todo.completed && (
        <div className="absolute top-4 right-4">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
            <CheckCircleOutlined className="text-white text-lg" />
          </div>
        </div>
      )}
    </div>
  );
} 