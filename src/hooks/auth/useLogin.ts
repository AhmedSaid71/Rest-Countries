import { useAuthContext } from "@/context/AuthContext";
import { useUserContext } from "@/context/UserContext";
import { UserType } from "@/types/user";
import { AUTH_API } from "@/utils/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface DataType {
  email?: string;
  password?: string;
}

interface LoginRequestType {
  status: string;
  token: string;
  message: string;
  data: {
    user: UserType;
  };
}

const loginRequest = async (data: DataType): Promise<LoginRequestType> => {
  const res = await AUTH_API.post("/auth/login", data);
  return res.data;
};

export const useLogin = () => {
  const { setUserData } = useUserContext();
  const { setAuthenticated } = useAuthContext();

  const { mutate: login, isPending } = useMutation({
    mutationFn: loginRequest,
    onSuccess: (data): void => {
      toast.success(data.message);
      setUserData(data.data.user);
      setAuthenticated();
    },
    onError: (error): void => {
      toast.error(error.message);
    },
  });

  return { login, isPending };
};
