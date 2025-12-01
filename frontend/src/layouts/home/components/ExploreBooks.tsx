export const ExploreBooks = () => {
  return (
    <>
      <div className="p-5 mb-4 bg-dark header">
        <div className="container container-fluid py-sm-5 mt-md-5 text-white d-md-flex align-items-between">
          <div className="col-md-10">
            <h1 className="display-5 fw-bold" style={{ color: "grey" }}>
              Find your next adventure
            </h1>
            <p className="mt-md-4 fs-4" style={{ color: "grey" }}>
              Dive into worlds filled with heroes, mysteries, and unforgettable
              stories. Whether you're chasing excitement, emotion, or pure
              escapism — your next journey starts here.
            </p>
          </div>
          <div className="col-md-2 mt-md-5">
            <a href="" type="button" className="btn btn-lg text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="grey"
                className="bi bi-arrow-right-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
