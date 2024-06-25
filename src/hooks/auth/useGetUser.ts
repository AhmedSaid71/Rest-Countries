import { useUserContext } from "@/context/AuthContext";
import { UserType } from "@/types/user";
import { AUTH_API } from "@/utils/axiosInstance";
import { useMutation } from "@tanstack/react-query";

interface getUserType {
  status: string;
  data: {
    user: UserType;
  };
}

const getUser = async (): Promise<getUserType> => {
  const res = await AUTH_API.get("/users/me");
  return res.data;
};

export const useGetUser = () => {
  const { setUserData } = useUserContext();
  const { mutate: getUserData, isPending: isGetting } = useMutation({
    mutationFn: getUser,
    onSuccess: (data): void => {
      setUserData(data.data.user);
    },
  });
  return { getUserData, isGetting };
};
