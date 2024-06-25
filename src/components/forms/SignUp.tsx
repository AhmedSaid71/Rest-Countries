import { useCreateUser } from "@/hooks/auth/useCreateUser";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

type FieldType = {
  name?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
};

interface SignUpPropsType {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const SignUP = ({ setIsLogin }: SignUpPropsType) => {
  const navigate = useNavigate();
  const { createUser } = useCreateUser();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    createUser(
      {
        name: values.name,
        email: values.email,
        password: values.password,
        passwordConfirm: values.passwordConfirm,
      },
      {
        onSuccess: () => {
          navigate("/");
        },
      }
    );
  };

  const handleGoToLogin = () => {
    setIsLogin(true);
  };
  return (
    <Form
      name="login"
      labelCol={{ span: 4 }}
      style={{ maxWidth: 500 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      layout="vertical"
      className="w-full"
    >
      <Form.Item<FieldType>
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Emil"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[
          { required: true, message: "Please input your password!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password").length >= 8) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The password must have 8 or more characters")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item<FieldType>
        label="Password Confirm"
        name="passwordConfirm"
        rules={[
          { required: true, message: "Please input your password again!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The new password that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <div className="flex gap-4 flex-col">
          <Button
            className="dark:bg-dark-blue dark:text-white px-7 py-4 w-fit"
            htmlType="submit"
          >
            Sign up
          </Button>
          <span className="dark:text-white text-base">
            Have an account?{" "}
            <span
              className="underline cursor-pointer"
              onClick={handleGoToLogin}
            >
              Login
            </span>
          </span>
        </div>
      </Form.Item>
    </Form>
  );
};

export default SignUP;
