import React from "react";
import { Form, Input, Button, Card, message, Space } from "antd";
import styles from "./NewEmployeeForm.module.scss";
import { createEmployee } from "api";

const success = () => {
  message.success("Employee created successfully");
};

const error = () => {
  message.error("Uh Oh! There was an error creating the employee");
};

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 9, span: 8 },
};

const NewEmployeeForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
    createEmployee(values)
      .then((response) => {
        success();
        form.resetFields();
      })
      .catch((e) => error());
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <Space></Space>
      <Card className={styles.container} title="Add Employee">
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default NewEmployeeForm;
