import type { Route } from "./+types/home";
import Navbar from "./components/landing/lNavbar";
import Login from "./components/userAuth/loginComponent";
import Footer from "./components/landing/lFooter";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Login || Verifact",
    },
    {
      name: "description",
      content: "Login to Verifact!",
    },
  ];
}

export default function loginPage() {
  return (
    <>
      <Login />
      <Footer />
    </>
  );
}
