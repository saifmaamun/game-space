import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div className="bg-indigo-950 mt-12 pt-12 pb-8 text-white">
      <div className="text-center pb-10 space-y-4">
        <h1 className="text-3xl font-bold">
          We Welcome Your <span className="text-orange-600">Passion </span> And{" "}
          <span className="text-orange-600">Expertise </span>
        </h1>
        <p className="text-xl text-gray-400 ">
          Join our empowering sports community today and grow with us.
        </p>
        <Button className="py-8 px-8 text-xl rounded-xl  font-bold hover:bg-orange-600 ">
          <Link to="/register"> Join With Us</Link>
        </Button>
      </div>
      <div className="container border-t-2 border-indigo-900 py-10">
        <div className="flex gap-2 justify-center text-white  items-top">
          <div className="flex-1">
            <h1 className="text-2xl font-semibold mb-6">Contact Us</h1>
            <p className="text-lg  text-gray-400 ">Toll Free Customer Care</p>
            <p className="text-lg mb-6 ">+01304568798</p>
            <p className="text-lg text-gray-400 ">Need Live Support</p>
            <p className="text-lg mb-6">livesupport@example.com</p>
            <div className="flex justify-start gap-8 items-center">
              <div>fb</div>
              <div>x</div>
              <div>what</div>
              <div>linked</div>
            </div>
          </div>
          <div className="flex-1 ">
            <h1 className="text-2xl font-semibold mb-4">Quick Links</h1>
            <p className="mt-4 text-lg text-gray-400 hover:text-orange-600">
              <Link to="/">About</Link>
            </p>
            <p className="mt-4 text-lg text-gray-400 hover:text-orange-600">
              <Link to="/">Service</Link>
            </p>
            <p className="mt-4 text-lg text-gray-400 hover:text-orange-600">
              <Link to="/">Event</Link>
            </p>
            <p className="mt-4 text-lg text-gray-400 hover:text-orange-600">
              <Link to="/">Blog</Link>
            </p>
            <p className="mt-4 text-lg text-gray-400 hover:text-orange-600">
              <Link to="/">Contact us</Link>
            </p>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-semibold mb-4">Support</h1>
            <p className="mt-4 text-lg text-gray-400 hover:text-orange-600">
              <Link to="/">Contact Us</Link>
            </p>
            <p className="mt-4 text-lg text-gray-400 hover:text-orange-600">
              <Link to="/">Faq</Link>
            </p>
            <p className="mt-4 text-lg text-gray-400 hover:text-orange-600">
              <Link to="/">Privacy Policy</Link>
            </p>
            <p className="mt-4 text-lg text-gray-400 hover:text-orange-600">
              <Link to="/">Terms & Conditions</Link>
            </p>
            <p className="mt-4 text-lg text-gray-400 hover:text-orange-600">
              <Link to="/">Pricing</Link>
            </p>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-semibold mb-4">Other Links</h1>
            <p className="mt-4 text-lg text-gray-400 hover:text-orange-600">
              <Link to="/">Coaches</Link>
            </p>
            <p className="mt-4 text-lg text-gray-400 hover:text-orange-600">
              <Link to="/">Sports Venue</Link>
            </p>
            <p className="mt-4 text-lg text-gray-400 hover:text-orange-600">
              <Link to="/">Join as Coach</Link>
            </p>
            <p className="mt-4 text-lg text-gray-400 hover:text-orange-600">
              <Link to="/">Add Venue</Link>
            </p>
            <p className="mt-4 text-lg text-gray-400 hover:text-orange-600">
              <Link to="/">My Acount</Link>
            </p>
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-semibold mb-4">Our Locations</h1>
            <p className="mt-4 text-lg text-gray-400 hover:text-orange-600">
              <Link to="/">Germany</Link>
            </p>
            <p className="mt-4 text-lg text-gray-400 hover:text-orange-600">
              <Link to="/">France</Link>
            </p>
            <p className="mt-4 text-lg text-gray-400 hover:text-orange-600">
              <Link to="/">Russia</Link>
            </p>
            <p className="mt-4 text-lg text-gray-400 hover:text-orange-600">
              <Link to="/">UK</Link>
            </p>
            <p className="mt-4 text-lg text-gray-400 hover:text-orange-600">
              <Link to="/">Australia</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-indigo-900 pt-10"></div>
      <p className="text-center text-lg  text-gray-400 hover:text-orange-600">
        © 2024 GamePlan - All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
