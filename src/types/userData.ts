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

export interface IUser {
  _id: string; // Unique identifier for the user
  name: string; // Name of the user
  email: string; // Email of the user
  phone: string; // Phone number of the user
  role: "user" | "admin"; // User role (can be expanded for additional roles)
  address: string; // Address of the user
  __v: number; // Version key for document management (from MongoDB)
}
