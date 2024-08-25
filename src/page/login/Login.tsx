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

import { setToken, setUser } from "../../redux/features/user/userSlice";

const Login = () => {
  // hooks
  const dispatch = useAppDispatch();
  const { email, password } = useAppSelector((state) => state.login);
  const navigate = useNavigate();
  const [login, { data }] = useLoginMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const loginData = {
      email,
      password,
    };

    const { data } = await login(loginData);
    if (data) {
      const token: string = data?.token;
      const user = jwtDecode(token);
      dispatch(setUser(user));
      dispatch(setToken(setToken));
      navigate("/");
    }

    dispatch(resetForm());
  };
  return (
    <div className="mt-56 px-10 py-20 bg-indigo-950 rounded-lg">
      <div className="w-full flex-1 md:flex  justify-around items-center">
        <div className="text-white w-1/2 mb-4">
          <div className="space-y-4">
            <h1 className="text-6xl font-semibold">Welcome Back!</h1>
            <p className="text-lg">
              Book your favorite sports facilities in a few clicks. Keep track
              of your bookings, manage your profile, and enjoy hassle-free
              scheduling.
            </p>
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
                  className="rounded-sm p-2 py-1 text-lg"
                  onChange={(e) => dispatch(setPassword(e.target.value))}
                />
              </div>
            </div>
            <Button className="mt-4 text-lg">
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
