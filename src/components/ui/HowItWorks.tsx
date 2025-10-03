import type React from "react";
import { useState } from "react";
import {
  FaUser,
  FaCheckCircle,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaClipboardList,
  FaSmile,
} from "react-icons/fa";

const HowItWorksTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      icon: <FaUser />,
      title: "Register",
      description: "Sign up to create your account and start booking.",
      detail: "Quick and easy registration process with email verification.",
    },
    {
      icon: <FaClipboardList />,
      title: "Choose Facility",
      description:
        "Explore a wide range of sports facilities available for booking.",
      detail:
        "Browse through basketball courts, tennis courts, swimming pools, and more.",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Pick Date & Time",
      description: "Select your preferred date and time for your session.",
      detail: "Real-time availability with flexible scheduling options.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Confirm Booking & Payment",
      description: "Finalize your booking with a secure payment method.",
      detail: "Multiple payment options with instant confirmation.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Check All Bookings",
      description:
        "View your upcoming bookings and manage them from your dashboard.",
      detail:
        "Comprehensive dashboard with booking history and management tools.",
    },
    {
      icon: <FaSmile />,
      title: "Enjoy Your Session",
      description: "Arrive at the facility on time and enjoy your game!",
      detail:
        "Premium facilities with all amenities for the perfect sports experience.",
    },
  ];

  // ✅ fixed curve path so nodes connect properly

  const generateCurvePath = (index: number, total: number) => {
    console.log(total);
    const stepGap = 16 * 16; // 16rem ≈ 256px
    const nodeOffset = 32; // offset for circle center
    const startY = index * stepGap + nodeOffset;
    const endY = (index + 1) * stepGap + nodeOffset;
    const midY = (startY + endY) / 2;
    const curveOffset = 120;
    const direction = index % 2 === 0 ? 1 : -1;

    // For the last step, just extend a little line down
    // if (index === total - 1) {
    //   // small vertical line of 80px (adjust as you like)
    //   return `M 0 ${startY} L 0 ${startY + 180}`;
    // }
    return `M 0 ${startY} Q ${curveOffset * direction} ${midY} 0 ${endY}`;
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/20 to-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your journey from registration to enjoying your favorite sport in
            just 6 simple steps
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* background curve */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
            <svg
              className="absolute inset-0 w-full h-full overflow-visible"
              style={{ left: "-50px", width: "100px" }}
            >
              {/* {steps.slice(0, -1).map((_, index) => ( */}
              {Array.from({ length: steps.length }).map((_, index) => (
                <path
                  key={index}
                  d={generateCurvePath(index, steps.length)}
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  fill="none"
                  className="stroke-gray-400 hover:stroke-primary"
                  style={{
                    filter: "drop-shadow(0 0 8px hsl(var(--primary) / 0.3))",
                  }}
                />
              ))}
            </svg>
          </div>

          {/* animated progress curve */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
            <svg
              className="absolute inset-0 w-full h-full overflow-visible"
              style={{ left: "-50px", width: "100px" }}
            >
              {/* {steps.slice(0, -1).map((_, index) => ( */}
              {Array.from({ length: steps.length }).map((_, index) => (
                <path
                  key={`progress-${index}`}
                  d={generateCurvePath(index, steps.length)}
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  fill="none"
                  className={`transition-all duration-1000 ease-out ${
                    activeStep !== null && activeStep >= index
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                  style={{
                    filter: "drop-shadow(0 0 12px hsl(var(--accent) / 0.6))",
                    strokeDasharray: "1000",
                    strokeDashoffset:
                      activeStep !== null && activeStep >= index ? "0" : "1000",
                  }}
                />
              ))}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="50%" stopColor="hsl(var(--accent))" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* content */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div
                    className={`bg-card border border-border rounded-2xl p-8 shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                      activeStep === index
                        ? "bg-cyan-900 text-primary-foreground border-primary"
                        : "bg-cyan-50"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-4 mb-4 ${
                        index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                      }`}
                    >
                      <div
                        className={`text-4xl transition-all duration-300 ${
                          activeStep === index
                            ? "text-primary-foreground scale-110"
                            : "text-orange-400"
                        }`}
                      >
                        {step.icon}
                      </div>
                      <div
                        className={`text-sm font-semibold px-3 py-1 rounded-full ${
                          activeStep === index
                            ? "bg-primary-foreground text-primary"
                            : "bg-orange-400 text-accent-foreground"
                        }`}
                      >
                        Step {index + 1}
                      </div>
                    </div>
                    <h3
                      className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                        activeStep === index
                          ? "text-primary-foreground"
                          : "text-cyan-900"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-base mb-3 transition-colors duration-300 ${
                        activeStep === index
                          ? "text-primary-foreground/90"
                          : "text-cyan-800"
                      }`}
                    >
                      {step.description}
                    </p>
                    <p
                      className={`text-sm transition-all duration-300 ${
                        activeStep === index
                          ? "text-primary-foreground/80 opacity-100 max-h-20"
                          : "text-muted-foreground opacity-0 max-h-0 overflow-hidden"
                      }`}
                    >
                      {step.detail}
                    </p>
                  </div>
                </div>

                {/* node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div
                    className={`w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${
                      activeStep === index
                        ? "bg-orange-400 border-orange-400 scale-125 shadow-lg shadow-accent/50"
                        : activeStep !== null && activeStep >= index
                        ? "bg-cyan-900 border-cyan-900"
                        : "bg-background border-cyan-900"
                    }`}
                  >
                    <div
                      className={`text-xl transition-colors duration-300 ${
                        activeStep === index
                          ? "text-black"
                          : activeStep !== null && activeStep >= index
                          ? "text-primary-foreground"
                          : "text-cyan-900"
                      }`}
                    >
                      {activeStep !== null && activeStep >= index ? (
                        <FaCheckCircle />
                      ) : (
                        step.icon
                      )}
                    </div>
                  </div>
                </div>

                {/* empty spacer */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-cyan-900 hover:bg-cyan-800 text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-primary/25">
            Start Your Booking Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksTimeline;
