import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/ApiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      toast.success("successfully logged In");
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      toast.err(err.message);
    },
  });

  return { login, isLoading };
}
