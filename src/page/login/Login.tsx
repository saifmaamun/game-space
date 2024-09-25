/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "../../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useLoginMutation } from "../../redux/features/login/loginApi";
import {
  resetForm,
  setEmail,
  setPassword,
} from "../../redux/features/login/loginSlice";
import { jwtDecode } from "jwt-decode";

import {
  setToken,
  setUser,
  setUserName,
} from "../../redux/features/user/userSlice";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";
import { ErrorData } from "../../types/errormessage";

const Login = () => {
  // hooks
  const dispatch = useAppDispatch();
  const { email, password } = useAppSelector((state) => state.login);
  const navigate = useNavigate();

  const [login, { data, error, isLoading }] = useLoginMutation();
  console.log(data);
  console.log("from mutation", error);

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
    const loginData = {
      email,
      password,
    };

    try {
      const { data } = await login(loginData);

      if (!data && isLoading) {
        console.log("loading");
      }
      if (data) {
        console.log(data?.data?.userWithoutPassword);

        const token: string = data?.token;
        const user = jwtDecode(token);

        // Dispatch the token and user details
        dispatch(setToken(token));
        dispatch(setUser(user));
        dispatch(setUserName(data?.data?.userWithoutPassword?.name));

        // Navigate to the homepage
        navigate("/");
      }
    } catch (error) {
      // Handle errors here (logging or showing error messages)
      console.error("An error occurred during login:", error);

      // if (error.response && error.response.data) {
      //   // Handle server errors (like invalid credentials)
      //   console.error("Server error:", error.response.data);
      // } else {
      //   // Handle other errors (network issues, etc.)
      //   console.error("Unexpected error:", error.message || error);
      // }
    }

    /*
    const { data } = await login(loginData);
    if (data) {
      console.log(data?.data?.userWithoutPassword);
      const token: string = data?.token;
      const user = jwtDecode(token);
      dispatch(setToken(token));
      dispatch(setUser(user));
      dispatch(setUserName(data?.data?.userWithoutPassword?.name));
      navigate("/");
    }

    */
    dispatch(resetForm());
  };
  return (
    <div className="my-20 px-10 py-20 bg-indigo-950 rounded-lg">
      <div className="w-full flex-1 md:flex  justify-around items-center">
        <div className="text-white w-1/2 mb-4">
          <div className="space-y-4">
            {isLoading && !data ? (
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
                <h1 className="text-6xl font-bold">
                  <span className="text-orange-600">Welcome</span> Back!
                </h1>
                <p className="text-lg">
                  Book your favorite sports facilities in a few clicks. Keep
                  track of your bookings, manage your profile, and enjoy
                  hassle-free scheduling.
                </p>
              </>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center text-black rounded-lg px-12  py-10 bg-orange-600">
          <form className="space-y-3" onSubmit={handleSubmit}>
            <h1 className="text-4xl font-bold">Login</h1>
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
                  className="rounded-sm p-2 mb-2 py-1 text-lg"
                  onChange={(e) => dispatch(setPassword(e.target.value))}
                />
              </div>
            </div>

            <Button className="text-lg bg-indigo-950 ">
              <input type="submit" />
            </Button>

            <div className="pt-4  ">
              <Link to="/register" className="font-semibold">
                <p>New Here! Need an Account?</p>
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
