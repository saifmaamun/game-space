/* eslint-disable @typescript-eslint/no-unused-vars */
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout } from "../../redux/features/user/userSlice";
import { useState } from "react";

const Navbar = () => {
  // user
  const { user } = useAppSelector((state) => state.user);
  // hooks
  const dispatch = useAppDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="  text-black font-semibold rounded-sm px-3 mb-8">
      <nav className="container mx-auto flex items-center justify-between space-x-10 py-12">
        <Link to={"/"}>
          <div className="flex align-middle justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#EA580C"
              className="size-9 mt-1 text-center outline-orange-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
              />
            </svg>
            <h1 className="text-4xl text-orange-600 font-extrabold">
              GamePlan
            </h1>
          </div>
        </Link>

        {/* large display menu */}
        <div className="hidden md:flex items-center space-x-5">
          <ul className="flex items-center space-x-5">
            <li>
              <Link
                className="rounded-lg backdrop-blur-[2px] p-1 inline-block hover:text-orange-500"
                to={"/facility"}
              >
                Facilities
              </Link>
            </li>
            <li>
              <Link
                className="rounded-lg backdrop-blur-[2px] p-1 inline-block hover:text-orange-500"
                to={"/about"}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="rounded-lg backdrop-blur-[2px] p-1 inline-block hover:text-orange-500"
                to={"/contact"}
              >
                Contact Us
              </Link>
            </li>

            {!user.email ? (
              <>
                <li>
                  <Link
                    className="rounded-lg backdrop-blur-[2px] p-1 inline-block  hover:text-orange-500"
                    to={"/login"}
                  >
                    Login
                  </Link>
                </li>

                <li>
                  <Link
                    className="rounded-lg backdrop-blur-[2px] p-1 inline-block hover:text-orange-500"
                    to={"/register"}
                  >
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="relative">
                  <Link
                    className="rounded-lg backdrop-blur-[2px] p-1 inline-block hover:text-orange-500"
                    to={"/dashboard"}
                  >
                    Dashboard
                  </Link>
                </li>

                <li>
                  <Link
                    className="rounded-lg backdrop-blur-[2px] p-1 inline-block hover:text-orange-500"
                    to={"/login"}
                    onClick={() => dispatch(logout())}
                  >
                    Logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={handleMenuToggle}
            className="text-orange-600  focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-5 mt-4">
          <li>
            <Link
              className="rounded-lg backdrop-blur-[2px] p-1 inline-block hover:text-orange-500"
              to={"/facility"}
            >
              Facilities
            </Link>
          </li>
          <li>
            <Link
              className="rounded-lg backdrop-blur-[2px] p-1 inline-block hover:text-orange-500"
              to={"/about"}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="rounded-lg backdrop-blur-[2px] p-1 inline-block hover:text-orange-500"
              to={"/contact"}
            >
              Contact Us
            </Link>
          </li>

          {!user.email ? (
            <>
              <li>
                <Link
                  className="rounded-lg backdrop-blur-[2px] p-1 inline-block  hover:text-orange-500"
                  to={"/login"}
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  className="rounded-lg backdrop-blur-[2px] p-1 inline-block hover:text-orange-500"
                  to={"/register"}
                >
                  Register
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  className="rounded-lg backdrop-blur-[2px] p-1 inline-block hover:text-orange-500"
                  to={"/dashboard"}
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  className="rounded-lg backdrop-blur-[2px] p-1 inline-block hover:text-orange-500"
                  to={"/login"}
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </Link>
              </li>
            </>
          )}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
