import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { useTodos } from './hooks/useTodos';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            智能待办事项管理器
          </h1>
          <p className="text-gray-600 text-center mb-6">
            使用AI智能分类，让任务管理更高效
          </p>

          <AddTodo onAdd={addTodo} />

          {totalCount > 0 && (
            <div className="mb-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                进度: {completedCount} / {totalCount} 已完成
                ({Math.round((completedCount / totalCount) * 100)}%)
              </p>
            </div>
          )}

          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
