import { Toaster } from "sonner";
import "./App.css";
import About from "./components/techs";
import Contact from "./components/contact";
import ContactForm from "./routes/ContactForm";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Home from "./routes/Home";
import Navbar from "./components/navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "./routes/Admin";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/contact",
      element: <ContactForm />,
    },
    {
      path:"/admin",
      element:<Admin/>
    },
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <>
      <div className="w-full h-full fixed overflow-x-hidden text-neutral-300 antialiased bg-[#101010]">
        <div className="container mx-auto lg:px-16 px-2">
          <Navbar />
          <RouterProvider router={router} />
          <Footer />
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default App;

// <div class="relative h-full w-full bg-black"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div>
