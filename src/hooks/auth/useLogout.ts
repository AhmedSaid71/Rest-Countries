import { useAuthContext } from "@/context/AuthContext";
import { useUserContext } from "@/context/UserContext";
import { AUTH_API } from "@/utils/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
interface logoutRequestType {
  status: string;
  message: string;
}
const logoutRequest = async (): Promise<logoutRequestType> => {
  const res = await AUTH_API.get("/auth/logout");
  return res.data;
};
export const useLogout = () => {
  const { setIsNotAuthenticated } = useAuthContext();
  const { setUserData } = useUserContext();
  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutRequest,
    onSuccess: (data) => {
      toast.success(data.message);
      setIsNotAuthenticated();
      setUserData(null);
    },
    onError: (error): void => {
      toast.error(error.message);
    },
  });
  return { logout, isPending };
};
