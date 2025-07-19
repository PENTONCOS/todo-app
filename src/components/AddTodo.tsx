import { useState } from 'react';
import { Input, Button, Form, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
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
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Form form={form} onFinish={handleSubmit} layout="inline" className="w-full">
      <Space.Compact className="w-full">
        <Form.Item
          name="text"
          className="flex-1 mb-0"
          rules={[
            { required: true, message: '请输入待办事项内容' },
            { max: 100, message: '内容不能超过100个字符' }
          ]}
        >
          <Input
            placeholder="添加新的待办事项..."
            size="large"
            allowClear
            className="rounded-r-none"
          />
        </Form.Item>
        <Form.Item className="mb-0">
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={loading}
            icon={<PlusOutlined />}
            className="rounded-l-none"
          >
            添加
          </Button>
        </Form.Item>
      </Space.Compact>
    </Form>
  );
} 