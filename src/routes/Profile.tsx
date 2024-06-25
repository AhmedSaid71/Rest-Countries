import { useLogout } from "@/hooks/auth/useLogout";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { logout } = useLogout();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logout();
    navigate("/");
  };
  return (
    <section className="min-h-[100dvh] dark:bg-dark-blue">
      <div className="flex items-center justify-center w-full min-h-[50dvh]">
        <Button onClick={handleLogOut}>Logout</Button>
      </div>
    </section>
  );
};

export default Profile;
