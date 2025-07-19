# 智能待办事项管理器

一个基于 React + TypeScript + Vite 的现代化待办事项管理应用，具备智能分类功能。

## ✨ 功能特性

- ✅ **基础CRUD操作**：添加、查看、完成、删除待办事项
- 🧠 **智能分类**：根据任务内容自动分类（工作、学习、生活、其他）
- 💾 **数据持久化**：使用 localStorage 保存数据
- 📱 **响应式设计**：支持移动端和桌面端
- 🎨 **现代UI**：使用 Tailwind CSS 构建美观界面
- 🔄 **CI/CD部署**：GitHub Actions + Vercel 自动部署

## 🚀 快速开始

### 本地开发

```bash
# 克隆项目
git clone <your-repo-url>
cd todo-app

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 构建部署

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 🛠️ 技术栈

- **前端框架**：React 18 + TypeScript
- **构建工具**：Vite
- **样式框架**：Tailwind CSS
- **状态管理**：React Hooks
- **部署平台**：Vercel
- **CI/CD**：GitHub Actions

## 📁 项目结构

```
src/
├── components/          # React 组件
│   ├── AddTodo.tsx     # 添加待办事项组件
│   ├── TodoItem.tsx    # 单个待办事项组件
│   └── TodoList.tsx    # 待办事项列表组件
├── hooks/              # 自定义 Hooks
│   └── useTodos.ts     # 待办事项状态管理
├── types/              # TypeScript 类型定义
│   └── index.ts        # 接口和类型
├── App.tsx             # 主应用组件
└── main.tsx            # 应用入口
```

## 🎯 智能分类规则

- **工作**：包含"工作"、"work"、"项目"等关键词
- **学习**：包含"学习"、"study"、"读书"等关键词
- **生活**：包含"生活"、"life"、"购物"等关键词
- **其他**：不匹配上述规则的任务

## 🔧 环境变量

如需配置 Vercel 部署，请在 GitHub Secrets 中设置：

- `VERCEL_TOKEN`：Vercel 访问令牌
- `ORG_ID`：Vercel 组织 ID
- `PROJECT_ID`：Vercel 项目 ID

## 📝 开发说明

本项目采用以下开发规范：

- 使用 TypeScript 进行类型安全开发
- 组件采用函数式编程风格
- 使用 Tailwind CSS 进行样式开发
- 遵循 React Hooks 最佳实践
- 代码提交使用中文提交信息

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m '添加新功能'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。
