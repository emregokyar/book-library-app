import wwa from "../../../assets/movie/wwa.jpeg";

export const FeaturedMovie = () => {
  return (
    <>
      <div className="col-xs-6 col-sm-6 col-md-4 col-lg-12 mb-3">
        <div className="text-center" style={{ color: "grey" }}>
          <img
            className="rounded-3"
            src={wwa}
            alt="Movie Poster"
            style={{
              width: "40rem",
              height: "28rem",
              objectFit: "cover",
            }}
          />
          <h4 className="mt-2 fw-bold">The Wolf of the Wall Street</h4>
          <p>Starring Leonardo di Caprio</p>
          <a href="" className="btn">
            RESERVE
          </a>
        </div>
      </div>
    </>
  );
};
