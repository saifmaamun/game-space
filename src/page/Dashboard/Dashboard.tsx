import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

// const Dashboard = () => {
//   return (
//     <div className="md:flex flex-1 justify-center items-center space-x-12  ">
//       <div className="grid-cols-3 w-1/4 bg-orange-600 rounded-3xl">
//         <div className="mx-auto space-y-4 h-screen py-24 px-12">
//           <div>
//             <Link to="/dashboard" className="text-xl font-semibold">
//               Dashboard
//             </Link>
//           </div>
//           <div>
//             <Link to="/dashboard" className="text-xl font-semibold">
//               My Bookings
//             </Link>
//           </div>
//           <div>
//             <Link to="/dashboard" className="text-xl font-semibold">
//               Facility Management
//             </Link>
//           </div>
//           <div>
//             <Link to="/dashboard" className="text-xl font-semibold">
//               Booking Management
//             </Link>
//           </div>
//           <div>
//             <Link to="/dashboard" className="text-xl font-semibold">
//               Add Admin
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="grid-cols-9 w-3/4 "> 3</div>
//     </div>
//   );
// };
const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = () => {
    setIsSidebarOpen(false); // Close the sidebar when a link is clicked
  };

  return (
    <div className="flex h-screen ">
      {/* Sidebar for desktop and toggleable sidebar for mobile */}
      <aside
        className={`fixed inset-y-0 left-0 transform bg-orange-600 rounded-xl text-white w-64 p-4 transition-transform duration-300 lg:relative lg:transform-none ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ zIndex: 50 }} // Ensure the sidebar is below the toggle button
      >
        <div className="text-4xl text-black font-bold mb-4">Dashboard</div>
        <nav>
          <ul>
            <li className="mb-2">
              <Link
                to="/dashboard"
                className="block py-2 px-4 rounded hover:bg-indigo-950 font-semibold"
                onClick={handleLinkClick} // Close sidebar on link click
              >
                Welcome
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/dashboard/mybookings"
                className="block py-2 px-4 rounded hover:bg-indigo-950 font-semibold"
                onClick={handleLinkClick} // Close sidebar on link click
              >
                My Bookings
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/allfacility"
                className="block py-2 px-4 rounded hover:bg-indigo-950 font-semibold"
                onClick={handleLinkClick} // Close sidebar on link click
              >
                All Facility
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/allbookings"
                className="block py-2 px-4 rounded hover:bg-indigo-950 font-semibold"
                onClick={handleLinkClick} // Close sidebar on link click
              >
                All Booking
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/addadmin"
                className="block py-2 px-4 rounded hover:bg-indigo-950 font-semibold"
                onClick={handleLinkClick} // Close sidebar on link click
              >
                Add Admin
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content and mobile sidebar toggle button */}
      <div className="flex-1 ">
        {/* Mobile Menu Toggle Button */}
        <div
          className="p-4 lg:hidden  " // Fixed positioning, above the sidebar
          onClick={toggleSidebar}
        >
          <button className="text-black p-2 rounded bg-white focus:outline-none focus:bg-gray-200 shadow">
            {isSidebarOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Main content area */}
        <main className="mx-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
