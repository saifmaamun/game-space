import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Container from "../ui/Container";
import Footer from "./Footer";

export default function MainLayout() {
  const location = useLocation();

  // Check if the current path starts with "/dashboard"
  const isDashboard = location.pathname.startsWith("/dashboard");
  return (
    <div>
      {!isDashboard && <Navbar />}
      <div className="pt-16">
        <Container>
          <Outlet />
        </Container>
      </div>
      {!isDashboard && <Footer />}
    </div>
  );
}
