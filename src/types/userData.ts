export interface ILoginFormInput {
  email: string;
  password: string;
}
export interface IRegisterFormInput {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: "user" | "admin";
  address: string;
}
