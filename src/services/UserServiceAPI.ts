import { config } from "@/config";

interface IRegisterUserData {
  email: string;
  password: string;
}

const registerUser = async (data: IRegisterUserData) => {
  const response = await fetch(`${config.backend_url}/auth/registration`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = response.json();
  return result;
};

export default {
  registerUser,
};
