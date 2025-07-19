import { Layout, Typography, Card, Space, Progress, Divider } from 'antd';
import { CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { useTodos } from './hooks/useTodos';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <Layout className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header className="bg-white shadow-sm border-b border-gray-200 flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <CheckCircleOutlined className="text-2xl text-blue-600" />
          <Title level={2} className="!mb-0 !text-gray-800">
            智能待办事项管理器
          </Title>
        </div>
      </Header>

      <Content className="p-6">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg border-0">
            <div className="text-center mb-6">
              <Text className="text-gray-600 text-lg">
                使用AI智能分类，让任务管理更高效
              </Text>
            </div>

            <AddTodo onAdd={addTodo} />

            {totalCount > 0 && (
              <div className="mb-6">
                <Divider />
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <ClockCircleOutlined className="text-blue-500" />
                    <Text strong>任务进度</Text>
                  </div>
                  <Text className="text-gray-600">
                    {completedCount} / {totalCount} 已完成
                  </Text>
                </div>
                <Progress
                  percent={progressPercent}
                  strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                  }}
                  showInfo={false}
                />
                <div className="text-center mt-2">
                  <Text type="secondary">完成度 {progressPercent}%</Text>
                </div>
              </div>
            )}

            <TodoList
              todos={todos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          </Card>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
