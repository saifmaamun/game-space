import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { IRegisterFormInput } from "../../types/userData";

const Register = () => {
  const { register, handleSubmit } = useForm<IRegisterFormInput>();
  const onSubmit: SubmitHandler<IRegisterFormInput> = (data) => {
    console.log(data);
  };
  return (
    <div className="mt-56 px-10 py-20 bg-indigo-950 rounded-lg">
      <div className="w-full flex-1 md:flex  justify-around items-center">
        <div className="text-white w-1/2 mb-4">
          <div className="space-y-4">
            <h1 className="text-6xl font-semibold">Lets Start Your Journey</h1>
            <p className="text-lg">
              New to our platform? Join us and make the most out of your sports
              experience. Your next game is just a booking away!
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center text-black rounded-lg px-16  py-10 bg-orange-600">
          <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-4xl font-bold">Register</h1>
            <div className="space-y-2">
              <div>
                <label className="text-lg font-semibold">Name</label>
              </div>
              <div>
                <input
                  type="name"
                  className="rounded-sm p-2 py-1 text-lg"
                  {...register("name")}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <label className="text-lg font-semibold">Email</label>
              </div>
              <div>
                <input
                  type="email"
                  className="rounded-sm p-2 py-1 text-lg"
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
                  type="password"
                  className="rounded-sm p-2 py-1 text-lg"
                  {...register("password")}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <label className="text-lg font-semibold">Phone</label>
              </div>
              <div>
                <input
                  type="text"
                  className="rounded-sm p-2 py-1 text-lg"
                  {...register("phone")}
                />
              </div>
            </div>
            {/* <div className="space-y-2">
              <div>
                <label className="text-lg font-semibold">Roll</label>
              </div>
              <div>
                <input
                  className="rounded-sm p-2 py-1 text-lg"
                  {...register("role")}
                />
              </div>
            </div> */}

            <div className="space-y-2">
              <div>
                <label className="text-lg font-semibold">Address</label>
              </div>
              <div>
                <input
                  type="text"
                  className="rounded-sm p-2 py-1 text-lg"
                  {...register("address")}
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
