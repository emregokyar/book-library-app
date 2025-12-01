import { Carousel } from "./components/Carousel";
import { ExploreBooks } from "./components/ExploreBooks";
import { Heroes } from "./components/Heroes";
import { BookServices } from "./components/BookServices";

export const HomePage = () => {
  return (
    <>
      <ExploreBooks />
      <Carousel />
      <Heroes />
      <BookServices />
    </>
  );
};
