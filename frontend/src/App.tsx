import "./App.css";
import { Footer } from "./layouts/footer/Footer";
import { Navbar } from "./layouts/header/Navbar";
//import { HomePage } from "./layouts/home/HomePage";
import { SearchBooksPage } from "./layouts/search/SearchBookPage";

export const App = () => {
  return (
    <>
      <Navbar />
      {/* <HomePage /> */}
      <SearchBooksPage />
      <Footer />
    </>
  );
};
