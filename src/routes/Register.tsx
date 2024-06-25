import Login from "@/components/forms/Login";
import SignUP from "@/components/forms/SignUp";
import { useState } from "react";

const Register = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <section className=" w-full flex justify-center mt-10">
      {isLogin ? (
        <Login setIsLogin={setIsLogin} />
      ) : (
        <SignUP setIsLogin={setIsLogin} />
      )}
    </section>
  );
};

export default Register;
