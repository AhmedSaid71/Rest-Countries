import { useUserContext } from "@/context/AuthContext";
import { UserType } from "@/types/user";
import { AUTH_API } from "@/utils/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface DataType {
  name?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
}

interface CreateUserRequestType {
  status: string;
  token: string;
  message: string;
  data: {
    user: UserType;
  };
}

export const createUserRequest = async (
  data: DataType
): Promise<CreateUserRequestType> => {
  const res = await AUTH_API.post("/auth/signup", data);
  return res.data;
};

export const useCreateUser = () => {
  const { setUserData } = useUserContext();
  const {
    mutate: createUser,
    isPending,
    error,
  } = useMutation({
    mutationFn: createUserRequest,
    onSuccess: (data) => {
      toast.success(data.message);
      setUserData(data.data.user);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { createUser, isPending, error };
};
