import { useState } from 'react';
import { Input, Button, Form, Space, message } from 'antd';
import { PlusOutlined, SendOutlined } from '@ant-design/icons';
import type { AddTodoProps } from '../types';

export function AddTodo({ onAdd }: AddTodoProps) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: { text: string }) => {
    if (values.text?.trim()) {
      setLoading(true);
      try {
        onAdd(values.text);
        form.resetFields();
        message.success('任务添加成功！');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Form form={form} onFinish={handleSubmit} layout="inline" className="w-full">
      <div className="w-full">
        <Form.Item
          name="text"
          className="w-full mb-0"
          rules={[
            { required: true, message: '请输入任务内容' },
            { max: 100, message: '内容不能超过100个字符' }
          ]}
        >
          <Input
            placeholder="输入您的任务，例如：完成项目报告、学习React、健身30分钟..."
            size="large"
            allowClear
            className="rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:shadow-lg transition-all duration-300"
            style={{
              height: '56px',
              fontSize: '16px',
              paddingLeft: '20px',
              paddingRight: '20px'
            }}
          />
        </Form.Item>
        <Form.Item className="w-full mb-0 mt-4">
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={loading}
            icon={loading ? <PlusOutlined /> : <SendOutlined />}
            className="w-full rounded-2xl h-12 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none'
            }}
          >
            {loading ? '添加中...' : '添加任务'}
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
} 