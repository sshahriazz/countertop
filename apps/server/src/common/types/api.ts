export type JWTPayload = {
  userId: string;
  email: string;
  role: string[];
  firstname?: string;
  lastname?: string;
};

export type AuthState = {
  user: { [key: string]: any };
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
};
