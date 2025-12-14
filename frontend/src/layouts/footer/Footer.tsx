import { Link } from "react-router-dom";

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
            <Link
              to={"/home"}
              className="nav-link px-2"
              style={{ color: "grey" }}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/search"}
              className="nav-link px-2"
              style={{ color: "grey" }}
            >
              Search
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
};
