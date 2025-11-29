import { Carousel } from "./components/Carousel";
import { ExploreMovies } from "./components/ExploreMovies";
import { Heroes } from "./components/Heroes";
import { MovieServices } from "./components/MovieServices";

export const HomePage = () => {
  return (
    <>
      <ExploreMovies />
      <Carousel />
      <Heroes />
      <MovieServices />
    </>
  );
};
