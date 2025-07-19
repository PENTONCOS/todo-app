import { Layout, Typography, Card, Progress, Divider, Space, Badge } from 'antd';
import { CheckCircleOutlined, ClockCircleOutlined, PlusOutlined, TrophyOutlined } from '@ant-design/icons';
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

  const getCategoryStats = () => {
    const stats = todos.reduce((acc, todo) => {
      const category = todo.category || '其他';
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    return stats;
  };

  const categoryStats = getCategoryStats();

  return (
    <Layout className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <Header className="bg-white/90 backdrop-blur-md shadow-lg border-b border-white/20 flex items-center justify-center">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <CheckCircleOutlined className="text-2xl text-white" />
          </div>
          <div>
            <Title level={2} className="!mb-0 !text-gray-800 font-bold">
              智能任务管理器
            </Title>
            <Text className="text-gray-600 text-sm">让每一天都充满成就感</Text>
          </div>
        </div>
      </Header>

      <Content className="p-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 左侧：添加任务 */}
            <div className="lg:col-span-2">
              <Card
                className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm"
                style={{ borderRadius: '20px' }}
              >
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <PlusOutlined className="text-2xl text-white" />
                  </div>
                  <Title level={3} className="!mb-2 !text-gray-800">
                    添加新任务
                  </Title>
                  <Text className="text-gray-600">
                    开始规划您的完美一天
                  </Text>
                </div>

                <AddTodo onAdd={addTodo} />
              </Card>
            </div>

            {/* 右侧：统计信息 */}
            <div className="space-y-6">
              {/* 进度卡片 */}
              <Card
                className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm"
                style={{ borderRadius: '20px' }}
              >
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <TrophyOutlined className="text-xl text-white" />
                  </div>
                  <Title level={4} className="!mb-1 !text-gray-800">
                    今日进度
                  </Title>
                </div>

                {totalCount > 0 ? (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Text className="text-gray-600">完成进度</Text>
                      <Badge
                        count={`${completedCount}/${totalCount}`}
                        style={{ backgroundColor: '#52c41a' }}
                      />
                    </div>
                    <Progress
                      percent={progressPercent}
                      strokeColor={{
                        '0%': '#108ee9',
                        '100%': '#52c41a',
                      }}
                      strokeWidth={8}
                      showInfo={false}
                    />
                    <div className="text-center">
                      <Text className="text-2xl font-bold text-gray-800">
                        {progressPercent}%
                      </Text>
                      <Text className="text-gray-500 block">完成度</Text>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Text className="text-gray-500">还没有任务，开始添加吧！</Text>
                  </div>
                )}
              </Card>

              {/* 分类统计 */}
              {Object.keys(categoryStats).length > 0 && (
                <Card
                  className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm"
                  style={{ borderRadius: '20px' }}
                >
                  <Title level={4} className="!mb-4 !text-gray-800 text-center">
                    任务分类
                  </Title>
                  <Space direction="vertical" className="w-full">
                    {Object.entries(categoryStats).map(([category, count]) => (
                      <div key={category} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full ${category === '工作' ? 'bg-red-500' :
                              category === '学习' ? 'bg-blue-500' :
                                category === '生活' ? 'bg-green-500' : 'bg-gray-500'
                            }`} />
                          <Text className="font-medium">{category}</Text>
                        </div>
                        <Badge count={count} style={{ backgroundColor: '#1890ff' }} />
                      </div>
                    ))}
                  </Space>
                </Card>
              )}
            </div>
          </div>

          {/* 任务列表 */}
          <div className="mt-8">
            <Card
              className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm"
              style={{ borderRadius: '20px' }}
            >
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <ClockCircleOutlined className="text-xl text-white" />
                </div>
                <Title level={4} className="!mb-1 !text-gray-800">
                  任务清单
                </Title>
                <Text className="text-gray-600">
                  管理您的所有任务
                </Text>
              </div>

              <TodoList
                todos={todos}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            </Card>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
