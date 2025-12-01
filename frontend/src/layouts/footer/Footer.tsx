export const Footer = () => {
  return (
    <>
      <footer
        className="container d-flex flex-wrap justify-content-between align-items-center py-5"
        style={{ color: "grey" }}
      >
        <p className="col-md-4 mb-0">
          @ {new Date().getFullYear()} Book Library App, Inc
        </p>
        <ul className="nav navbar-dark col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="" className="nav-link px-2" style={{ color: "grey" }}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link px-2" style={{ color: "grey" }}>
              Search
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};
