export interface SignupFormProps {
  fullname?: string;
  username?: string;
  email?: string;
  password?: string;
  referralCode?: string;
  onFinish?: (values: SignupFormProps) => void;
}