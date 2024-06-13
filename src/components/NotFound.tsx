import Lottie from "lottie-react";
import notFoundAnimation from "../assets/not found.json";
const NotFound = () => {
  return (
    <div className="w-full  gap-10 flex-col flex items-center justify-center min-h-[85.3dvh]">
      <div className="text-2xl font-bold">No country founded with this name</div>
      <Lottie animationData={notFoundAnimation} className="w-[500px]" />;
    </div>
  );
};

export default NotFound;
