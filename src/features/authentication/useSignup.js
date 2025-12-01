import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/ApiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(
        "Account successfully created! please verufuly the new account from the user's email address"
      );
    },
    onError: (err) => toast.error(err.message),
  });
  return { signup, isLoading };
}
