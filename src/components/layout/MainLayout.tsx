import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Container from "../ui/Container";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <Container>
          <Outlet />
        </Container>
      </div>
    </div>
  );
}
