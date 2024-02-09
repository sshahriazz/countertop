export type Login = {
  email: string;
  password: string;
};
export type Register = {
  email: string;
  password: string;
  confirmPassword: string;
};
export type Auth = {
  user: User;
  tokens: Tokens;
};

export type Tokens = {
  accessToken: string;
  refreshToken: string;
};

export type User = {
  id: string;
  email: string;
  phone: null;
  first_name: string;
  last_name: string;
  role: string[];
  address: null;
  email_verified: boolean;
  is2fa: boolean;
  disable_access: boolean;
  otp_secret: null;
  avatar: string;
  Per_hour: number;
  monthly_salary: number;
  use_Pay_clock: boolean;
  work_start: string;
  work_end: string;
  show_in_kiosk: string;
  hire_date: null;
  terminate_date: null;
  rating: number;
  created_at: Date;
  updated_at: Date;
};
