const AboutUs = () => {
  return (
    <div className="my-12 px-6">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-orange-600">About Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We are dedicated to providing the best facilities and services to our
          customers, ensuring the best experience for your bookings and events.
        </p>
      </section>

      {/* Mission Statement */}
      <section className="mb-16">
        <h2 className="text-4xl font-semibold mb-4 text-orange-600">
          Our Mission
        </h2>
        <p className="text-lg text-gray-600">
          Our mission is to provide an easy and efficient platform for booking
          sports facilities, making it accessible to everyone. We believe in
          empowering individuals and organizations to focus on their game while
          we handle the rest.
        </p>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-semibold mb-8 text-orange-600">
          Meet the Team
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {/* Team Member 1 */}
          <div className="p-6  rounded-md shadow-lg bg-white  transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-2xl font-bold text-indigo-950">John Doe</h3>
            <p className="text-lg text-gray-600">Founder & CEO</p>
            <p className="mt-4 text-gray-500">
              John is the visionary behind our platform, with years of
              experience in the tech industry and a passion for sports.
            </p>
          </div>
          {/* Team Member 2 */}
          <div className="p-6  rounded-md shadow-lg bg-white  transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-2xl font-bold text-indigo-950">Jane Smith</h3>
            <p className="text-lg text-gray-600">CTO</p>
            <p className="mt-4 text-gray-500">
              Jane leads our tech team, ensuring that our platform is robust,
              secure, and user-friendly.
            </p>
          </div>
          {/* Team Member 3 */}
          <div className="p-6  rounded-md shadow-lg bg-white  transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-2xl font-bold text-indigo-950">Mark Johnson</h3>
            <p className="text-lg text-gray-600">COO</p>
            <p className="mt-4 text-gray-500">
              Mark ensures smooth operations, coordinating between teams and
              making sure everything runs like clockwork.
            </p>
          </div>
        </div>
      </section>

      {/* History & Milestones */}
      <section className="mb-16">
        <h2 className="text-4xl font-semibold mb-8 text-orange-600">
          Our Journey
        </h2>
        <div className="border-l-4 border-orange-600 pl-6">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-indigo-950">2018</h3>
            <p className="text-lg text-gray-600">
              Our platform was born with the aim of simplifying facility booking
              for sports enthusiasts.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-indigo-950">2020</h3>
            <p className="text-lg text-gray-600">
              We expanded our services to include corporate and private events,
              providing top-tier facilities.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-indigo-950">2023</h3>
            <p className="text-lg text-gray-600">
              We reached over 100,000 users and continue to grow, providing even
              more features and facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="mb-16">
        <h2 className="text-4xl font-semibold mb-4 text-orange-600">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          We'd love to hear from you! Feel free to reach out to us through the
          following channels:
        </p>
        <p className="text-lg font-semibold text-indigo-950">Office Address</p>
        <p className="text-lg text-gray-600">
          Bashundhara R/A, Dhaka 1229, Dhaka, Bangladesh
        </p>
        <p className="text-lg font-semibold text-indigo-950 mt-4">
          Phone Number
        </p>
        <p className="text-lg text-gray-600">+880 156 789 0595</p>
        <p className="text-lg font-semibold text-indigo-950 mt-4">Email</p>
        <p className="text-lg text-gray-600">support@gameplan.com</p>
      </section>
    </div>
  );
};

export default AboutUs;
