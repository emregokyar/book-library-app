import "./App.css";
import { Footer } from "./layouts/footer/Footer";
import { Navbar } from "./layouts/header/Navbar";
import { HomePage } from "./layouts/home/HomePage";

export const App = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
};
