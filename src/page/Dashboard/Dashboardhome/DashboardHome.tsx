import welcome from "../../../assets/26459444_regards_concept_hola_from_dave_illustration.svg";
import { useAppSelector } from "../../../redux/hooks";
const DashboardHome = () => {
  // user
  const { name } = useAppSelector((state) => state.user.user);

  return (
    <div className="bg-indigo-950  text-white px-8 py-8 rounded-xl w-full">
      <div className="flex justify-between items-top">
        <div>
          <h1 className="text-6xl font-bold">
            Welcome Back, <span className="text-orange-600">{name}</span>!
          </h1>
          <p className="text-2xl px-2 mt-8">We’re glad to see you!</p>
          <p className="text-2xl px-2 mt-2">
            Here’s where you can manage all your bookings and keep track of your
            activities. <br /> If you need to make any changes or cancellations,
            you can do it all right here.
          </p>

          <p className="text-2xl  px-2 mt-2 ">Enjoy your day!</p>
        </div>
        <img
          className="hidden md:block md:w-1/3 rounded-full "
          src={welcome}
          alt="Wlcome Avater"
        />
      </div>
    </div>
  );
};

export default DashboardHome;
