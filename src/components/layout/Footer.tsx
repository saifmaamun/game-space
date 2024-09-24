import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div className="bg-indigo-950 mt-24 pt-16 pb-8  text-white">
      <div className="text-center pb-10 space-y-4">
        <h1 className="text-3xl font-bold">
          We Welcome Your <span className="text-orange-600">Passion </span> And{" "}
          <span className="text-orange-600">Expertise </span>
        </h1>
        <p className="text-xl text-gray-400 ">
          Join our empowering sports community today and grow with us.
        </p>
        <Button className="py-8 px-8 text-xl rounded-xl border bg-transparent  font-bold hover:bg-orange-600  hover:text-indigo-950">
          <Link to="/register"> Join With Us</Link>
        </Button>
      </div>
      <div className="container border-t-2 border-indigo-900 py-10">
        <div className=" flex-1 md:flex  gap-2 justify-evenly text-white  items-top">
          <div className="">
            <h1 className="text-2xl font-semibold mb-6">Contact Us</h1>
            <p className="text-lg  text-gray-400 ">Toll Free Customer Care</p>
            <p className="text-lg mb-6 ">+880 156 789 0595</p>
            <p className="text-lg text-gray-400 ">Need Live Support</p>
            <p className="text-lg mb-6">support@gameplan.com</p>
            <div className="flex justify-start gap-8 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                  fill="#EA580C"
                  stroke-width="1.5"
                  stroke="black"
                  className="size-8 text-white"
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
                </svg>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                  fill="#EA580C"
                  stroke-width="1.5"
                  stroke="black"
                  className="size-8 text-white"
                >
                  <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                </svg>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                  fill="#EA580C"
                  stroke-width="1.5"
                  stroke="black"
                  className="size-8 text-white"
                >
                  <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
                </svg>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                  fill="#EA580C"
                  stroke-width="1.5"
                  stroke="black"
                  className="size-8 text-white"
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  viewBox="0 0 512 512"
                  fill="#EA580C"
                  stroke-width="1.5"
                  stroke="black"
                  className="size-8 text-white"
                >
                  <path
                    fill-rule="nonzero"
                    d="M170.663 256.157c-.083-47.121 38.055-85.4 85.167-85.482 47.121-.092 85.407 38.029 85.499 85.159.091 47.13-38.047 85.4-85.176 85.492-47.112.09-85.399-38.039-85.49-85.169zm-46.108.092c.141 72.602 59.106 131.327 131.69 131.185 72.592-.14 131.35-59.089 131.209-131.691-.141-72.577-59.114-131.336-131.715-131.194-72.585.141-131.325 59.114-131.184 131.7zm237.104-137.092c.033 16.954 13.817 30.682 30.772 30.649 16.961-.034 30.689-13.811 30.664-30.765-.033-16.954-13.818-30.69-30.78-30.656-16.962.033-30.689 13.818-30.656 30.772zm-208.696 345.4c-24.958-1.086-38.511-5.234-47.543-8.709-11.961-4.628-20.496-10.177-29.479-19.093-8.966-8.951-14.532-17.461-19.202-29.397-3.508-9.033-7.73-22.569-8.9-47.527-1.269-26.983-1.559-35.078-1.683-103.433-.133-68.338.116-76.434 1.294-103.441 1.069-24.941 5.242-38.512 8.709-47.536 4.628-11.977 10.161-20.496 19.094-29.478 8.949-8.983 17.459-14.532 29.403-19.202 9.025-3.526 22.561-7.715 47.511-8.9 26.998-1.278 35.085-1.551 103.423-1.684 68.353-.133 76.448.108 103.456 1.294 24.94 1.086 38.51 5.217 47.527 8.709 11.968 4.628 20.503 10.145 29.478 19.094 8.974 8.95 14.54 17.443 19.21 29.413 3.524 8.999 7.714 22.552 8.892 47.494 1.285 26.998 1.576 35.094 1.7 103.432.132 68.355-.117 76.451-1.302 103.442-1.087 24.957-5.226 38.52-8.709 47.56-4.629 11.953-10.161 20.488-19.103 29.471-8.941 8.949-17.451 14.531-29.403 19.201-9.009 3.517-22.561 7.714-47.494 8.9-26.998 1.269-35.086 1.56-103.448 1.684-68.338.133-76.424-.124-103.431-1.294zM149.977 1.773c-27.239 1.286-45.843 5.648-62.101 12.019-16.829 6.561-31.095 15.353-45.286 29.603C28.381 57.653 19.655 71.944 13.144 88.79c-6.303 16.299-10.575 34.912-11.778 62.168C.172 178.264-.102 186.973.031 256.489c.133 69.508.439 78.234 1.741 105.548 1.302 27.231 5.649 45.827 12.019 62.092 6.569 16.83 15.353 31.089 29.611 45.289 14.25 14.2 28.55 22.918 45.404 29.438 16.282 6.294 34.902 10.583 62.15 11.777 27.305 1.203 36.022 1.468 105.521 1.336 69.532-.133 78.25-.44 105.555-1.734 27.239-1.302 45.826-5.664 62.1-12.019 16.829-6.585 31.095-15.353 45.288-29.611 14.191-14.251 22.917-28.55 29.428-45.404 6.304-16.282 10.592-34.904 11.777-62.134 1.195-27.323 1.478-36.049 1.344-105.557-.133-69.516-.447-78.225-1.741-105.522-1.294-27.256-5.657-45.844-12.019-62.118-6.577-16.829-15.352-31.08-29.602-45.288-14.25-14.192-28.55-22.935-45.404-29.429-16.29-6.304-34.903-10.6-62.15-11.778C333.747.164 325.03-.101 255.506.031c-69.507.133-78.224.431-105.529 1.742z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className=" ">
            <h1 className="text-2xl font-semibold mb-4">Quick Links</h1>
            <p className="mt-4 text-lg text-gray-400 hover:text-orange-600">
              <Link to="/about">About Us</Link>
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
              <Link to="/contact">Contact us</Link>
            </p>
          </div>

          <div className="">
            <h1 className="text-2xl font-semibold mb-4">Support</h1>
            <p className="mt-4 text-lg text-gray-400 hover:text-orange-600">
              <Link to="/contact">Contact Us</Link>
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

          <div className="">
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

          <div className="">
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
