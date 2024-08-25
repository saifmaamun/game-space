import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { ILoginFormInput } from "../../types/userData";

const Login = () => {
  const { register, handleSubmit } = useForm<ILoginFormInput>();
  const onSubmit: SubmitHandler<ILoginFormInput> = (data) => {
    console.log(data);
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
            {/* <p className="text-lg">
              New to our platform? Join us and make the most out of your sports
              experience. Your next game is just a booking away!
            </p> */}
          </div>
        </div>
        <div className="flex justify-center items-center text-black rounded-lg px-12  py-10 bg-orange-600">
          <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-4xl font-bold">Login</h1>
            <div className="space-y-2">
              <div>
                <label className="text-lg font-semibold">Email</label>
              </div>
              <div>
                <input
                  className="rounded-sm ps-2 py-1 text-lg"
                  {...register("email")}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <label className="text-lg font-semibold">Password</label>
              </div>
              <div>
                <input
                  className="rounded-sm ps-2 py-1 text-lg"
                  {...register("password")}
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
