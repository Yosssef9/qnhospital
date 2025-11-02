import { Outlet, Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
export default function MainLayout() {
  return (
    <div>
      <NavBar />
      <div className=" min-h-screen bg-white flex flex-col">
        <Outlet /> {/* Nested routes render here */}
      </div>
      <Footer />
    </div>
  );
}
