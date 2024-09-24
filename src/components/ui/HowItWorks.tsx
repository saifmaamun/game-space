import {
  FaUser,
  FaCheckCircle,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaClipboardList,
  FaSmile,
} from "react-icons/fa";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <FaUser />,
      title: "Register",
      description: "Sign up to create your account and start booking.",
    },
    {
      icon: <FaClipboardList />,
      title: "Choose Facility",
      description:
        "Explore a wide range of sports facilities available for booking.",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Pick Date & Time",
      description: "Select your preferred date and time for your session.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Confirm Booking & Payment",
      description: "Finalize your booking with a secure payment method.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Check All Bookings",
      description:
        "View your upcoming bookings and manage them from your dashboard.",
    },
    {
      icon: <FaSmile />,
      title: "Enjoy Your Session",
      description: "Arrive at the facility on time and enjoy your game!",
    },
  ];

  return (
    <section className="my-32 py-12 text-indigo-950 bg-gradient-to-bl from-indigo-100 to-indigo-200 rounded-3xl shadow-2xl">
      <h2 className="text-5xl font-bold text-center mb-14 text-indigo-900 ">
        How It Works
      </h2>

      <div className="grid grid-cols-1 gap-12 px-4 md:px-16">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl  p-16 shadow-lg transform transition-all duration-700 hover:scale-110 hover:rotate-1 hover:shadow-2xl hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 group"
          >
            <div className="absolute inset-0 bg-indigo-100 opacity-0 group-hover:opacity-30 rounded-xl transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="text-6xl text-orange-600 mb-4 transform group-hover:scale-125 transition-transform duration-500">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-center mb-3 group-hover:text-white transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center group-hover:text-gray-100 transition-colors duration-300">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
