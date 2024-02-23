export interface User {
  user_id: string;
  f_name: string;
  l_name: string;
  email: string;
  cohort_no: string;
  password: string;
}

export interface loginUserDetails {
  user_id: string;
  f_name: string;
  l_name: string;
  email: string;
  cohort_no: string;
  isWelcomed: boolean;
}