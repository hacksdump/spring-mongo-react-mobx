import React, { useState } from "react";
import { Form, Input, Button, Card, message, Space, Select, Modal } from "antd";
import styles from "./NewEmployeeForm.module.scss";

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

const NewEmployeeForm = (props) => {
  const departments = props.departments;
  const [form] = Form.useForm();
  const [modalIsShowing, setModalIsShowing] = useState(false);
  const [departmentInput, setDepartmentInput] = useState("");

  const onFinish = (values) => {
    console.log(values);
    const fixedFormData = {
      ...values,
      department: { id: values.departmentId },
    };

    props
      .createEmployee(fixedFormData)
      .then((response) => {
        success();
        form.resetFields();
      })
      .catch((e) => error());
  };

  const onReset = () => {
    form.resetFields();
  };

  const handleCreateDepartmentButton = () => {
    setModalIsShowing(true);
  };

  const handleModalOk = () => {
    props.createDepartment({ name: departmentInput });
    setDepartmentInput("");
    setModalIsShowing(false);
  };

  const handleModalCancel = () => {
    setModalIsShowing(false);
    setDepartmentInput("");
  };

  return (
    <>
      <Space />
      <Modal
        title="Create Department"
        visible={modalIsShowing}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <Input
          onChange={(e) => setDepartmentInput(e.target.value)}
          value={departmentInput}
        />
      </Modal>
      <Card className={styles.container} title="Add Employee">
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
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
            <Input.TextArea className={styles.textarea} />
          </Form.Item>
          <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
            <Select placeholder="Select gender">
              <Select.Option value="MALE">Male</Select.Option>
              <Select.Option value="FEMALE">Female</Select.Option>
              <Select.Option value="UNSPECIFIED">Other</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="departmentId"
            label="Department"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select department">
              {departments.map((department) => (
                <Select.Option value={department.id} key={department.id}>
                  {department.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item className={styles.buttonContainer}>
            <Button
              htmlType="button"
              onClick={handleCreateDepartmentButton}
              className={styles.createDepartmentButton}
            >
              Create Department
            </Button>
            <Button
              htmlType="button"
              onClick={onReset}
              className={styles.resetButton}
            >
              Reset
            </Button>
            <Button type="primary" htmlType="submit" size="large">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default NewEmployeeForm;
