export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg main-color navbar-dark py-3">
      <div className="container-fluid container">
        <span className="navbar-brand" style={{ color: "#b87c4c" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#b87c4c"
            className="bi bi-film"
            viewBox="0 0 16 16"
          >
            <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z" />
          </svg>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarDropdown"
          aria-controls="navbarDropdown"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Search
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item m-1">
              <a
                className="btn btn-outline w-100"
                href=""
                type="button"
                style={{ color: "grey", outlineColor: "grey" }}
              >
                Sign in
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
