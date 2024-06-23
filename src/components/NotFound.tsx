import Lottie from "lottie-react";
import notFoundAnimation from "../assets/not found.json";
import { NotfoundType } from "../types";
const NotFound = ({ message, children }: NotfoundType) => {
  return (
    <div className="w-full  gap-10 flex-col flex items-center justify-center min-h-[85.3dvh]">
      <div className="text-2xl font-bold">{message}</div>
      {children && children}
      <Lottie animationData={notFoundAnimation} className="w-[500px]" />
    </div>
  );
};

export default NotFound;
