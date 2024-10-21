interface ITokens {
  accessToken: string;
  refreshToken: string;
}

interface IUser {
  id: number;
  fullName: string | null;
  email: string;
}
