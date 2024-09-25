/* eslint-disable @typescript-eslint/no-explicit-any */
// import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setEmail,
  setName,
  setAddress,
  setPassword,
  setPhone,
  resetForm,
} from "../../redux/features/register/registerSlice";
import { useSignUpMutation } from "../../redux/features/register/registerApi";
import { IRegisterFormInput } from "../../types/userData";
import { useLoginMutation } from "../../redux/features/login/loginApi";
import { setToken, setUser } from "../../redux/features/user/userSlice";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";
import { ErrorData } from "../../types/errormessage";

const Register = () => {
  // hooks
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [signUp, { data: signinData, error, isError, isSuccess, isLoading }] =
    useSignUpMutation();
  console.log("ignore", signinData, error, isError, isSuccess, isLoading);
  const [login, { data: loginData }] = useLoginMutation();
  console.log("ignore", loginData);
  const { name, address, email, password, phone, role } = useAppSelector(
    (state) => state.register
  );

  // error
  // error
  // Type guard for FetchBaseQueryError
  const isFetchBaseQueryError = (error: any): error is FetchBaseQueryError => {
    return (error as FetchBaseQueryError).status !== undefined;
  };

  // Type guard for SerializedError
  const isSerializedError = (error: any): error is SerializedError => {
    return (error as SerializedError).message !== undefined;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userData: IRegisterFormInput = {
      name,
      address,
      email,
      password,
      phone,
      role,
    };
    console.log(userData);
    try {
      const user = await signUp(userData);

      if (user) {
        const loginData = {
          email: userData.email,
          password: userData.password,
        };

        const { data } = await login(loginData);

        if (data) {
          const token: string = data?.token;
          const decodedUser = jwtDecode(token); // Renamed variable to avoid shadowing

          // Dispatch user and token to Redux store
          dispatch(setUser(decodedUser));
          dispatch(setToken(token));

          // Navigate to the homepage
          navigate("/");
        }
      }

      // Reset the form after successful sign-up and login
      dispatch(resetForm());
    } catch (error) {
      // Handle the error here (e.g., show a notification or log it)
      console.error("An error occurred:", error);

      //  // Optionally, you can handle different error types based on the structure of your errors
      //  if (error.response && error.response.data) {
      //    // Handle errors from the server
      //    console.error("Server error:", error.response.data);
      //  } else {
      //    // Handle other kinds of errors (network issues, etc.)
      //    console.error("Unexpected error:", error.message || error);
      //  }

      // Optionally reset form or show user feedback
      // dispatch(resetForm());
    }

    // console.log(name, address, email, password, phone, role);
  };
  return (
    <div className="mt-20 px-10 py-20 bg-indigo-950 rounded-lg">
      <div className="w-full flex-1 md:flex  justify-around items-center">
        <div className="text-white w-1/2 mb-4">
          <div className="space-y-4">
            {isLoading && !signinData ? (
              <>
                <h1 className="text-6xl font-bold">
                  <span className="text-orange-600">loading...</span>
                </h1>
                <p className="text-lg">Please Wait!</p>
              </>
            ) : error ? (
              <>
                <h1 className="text-6xl font-bold">
                  <span className="text-red-600">Error!!!</span>
                </h1>
                <p className="text-lg">
                  {isFetchBaseQueryError(error) && error.data
                    ? (error.data as ErrorData).message // Assert type to ErrorData
                    : isSerializedError(error)
                    ? error.message
                    : "An unknown error occurred"}
                </p>
              </>
            ) : (
              <>
                <h1 className="text-6xl font-semibold">
                  Lets Start Your Journey
                </h1>
                <p className="text-lg">
                  New to our platform? Join us and make the most out of your
                  sports experience. Your next game is just a booking away!
                </p>
              </>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center text-black rounded-lg px-16  py-10 bg-orange-600">
          <form className="space-y-3" onSubmit={handleSubmit}>
            <h1 className="text-4xl font-bold">Register</h1>
            <div className="space-y-2">
              <div>
                <label htmlFor="name" className="text-lg font-semibold">
                  Name
                </label>
              </div>
              <div>
                <input
                  onChange={(e) => dispatch(setName(e.target.value))}
                  type="text"
                  id="name"
                  value={name}
                  required
                  className="rounded-sm p-2 py-1 text-lg"
                  // {...register("name")}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <label htmlFor="email" className="text-lg font-semibold">
                  Email
                </label>
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  required
                  className="rounded-sm p-2 py-1 text-lg"
                  onChange={(e) => dispatch(setEmail(e.target.value))}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <label htmlFor="password" className="text-lg font-semibold">
                  Password
                </label>
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  required
                  className="rounded-sm p-2 py-1 text-lg"
                  onChange={(e) => dispatch(setPassword(e.target.value))}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <label htmlFor="phone" className="text-lg font-semibold">
                  Phone
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  required
                  className="rounded-sm p-2 py-1 text-lg"
                  onChange={(e) => dispatch(setPhone(e.target.value))}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <label htmlFor="address" className="text-lg font-semibold">
                  Address
                </label>
              </div>
              <div>
                <input
                  type="text"
                  id="address"
                  value={address}
                  required
                  className="rounded-sm p-2 py-1 mb-2 text-lg"
                  onChange={(e) => dispatch(setAddress(e.target.value))}
                />
              </div>
            </div>
            <Button className="mt-4 text-lg">
              <input type="submit" />
            </Button>
            <div className="pt-4  ">
              <Link to="/login" className="font-semibold">
                <p>Already have an Account?</p>
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
