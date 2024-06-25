import { useLogin } from "@/hooks/auth/useLogin";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

type FieldType = {
  email?: string;
  password?: string;
};

interface LoginPropsType {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ setIsLogin }: LoginPropsType) => {
  const navigate = useNavigate();
  const { login, isPending } = useLogin();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    login(
      {
        email: values.email,
        password: values.password,
      },
      {
        onSuccess: (data) => {
          console.log(data);
          navigate("/");
        },
      }
    );
  };

  const handleGoToSignUp = () => {
    setIsLogin(false);
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
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <div className="flex gap-4 flex-col">
          <Button
            className="dark:bg-dark-blue dark:text-white px-7 py-4 w-fit"
            htmlType="submit"
            disabled={isPending}
          >
            Login
          </Button>
          <span className="dark:text-white text-base">
            Don't have account?{" "}
            <span
              className="underline cursor-pointer"
              onClick={handleGoToSignUp}
            >
              sing up
            </span>
          </span>
        </div>
      </Form.Item>
    </Form>
  );
};

export default Login;
