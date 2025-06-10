import type { Route } from "./+types/home";
import Navbar from "./components/landing/lNavbar";
import Footer from "./components/landing/lFooter";
import SignUp from "./components/userAuth/signUpComponent";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Signup || Verifact",
    },
    {
      name: "description",
      content: "Welcome to Verifact!",
    },
  ];
}

export default function loginPage() {
  return (
    <>
      <SignUp />
      <Footer />
    </>
  );
}
