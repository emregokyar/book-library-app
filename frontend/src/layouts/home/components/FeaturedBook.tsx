import _1984 from "../../../assets/books/1984.jpg";

export const FeaturedMovie = () => {
  return (
    <>
      <div className="col-xs-6 col-sm-6 col-md-3 mb-3">
        <div className="text-center" style={{ color: "grey" }}>
          <img
            className="rounded-3 border"
            src={_1984}
            alt="Book Poster"
            style={{
              width: "16rem",
              height: "25rem",
              objectFit: "cover",
            }}
          />
          <h4 className="mt-2 fw-bold">1984</h4>
          <p>By George Orwell</p>
          <a
            href=""
            className="btn border-bottom rounded-0"
            style={{ color: "grey" }}
          >
            RESERVE
          </a>
        </div>
      </div>
    </>
  );
};
