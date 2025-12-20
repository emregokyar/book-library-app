import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SpinnerLoading } from "../utils/SpinnerLoading";

export const Navbar = () => {
  const [roles, setRoles] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { isAuthenticated, loginWithRedirect, logout, getIdTokenClaims } =
    useAuth0();

  useEffect(() => {
    const fetchRoles = async () => {
      const claims = await getIdTokenClaims();
      const fetchedRoles = claims?.["https://library-app/roles"] || [];
      setRoles(fetchedRoles);
      setIsLoading(false);
    };

    fetchRoles();
  }, [isAuthenticated, getIdTokenClaims]);

  if (isLoading) {
    return <SpinnerLoading />;
  }

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  const handleLogin = () => {
    loginWithRedirect();
    window.location.assign("/");
  };

  return (
    <nav className="navbar navbar-expand-lg main-color navbar-dark py-3">
      <div className="container-fluid container">
        <span className="navbar-brand" style={{ color: "#b87c4c" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#b87c4c"
            className="bi bi-book-half"
            viewBox="0 0 16 16"
          >
            <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
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
              <NavLink className="nav-link" to={"/home"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" href="" to={"/search"}>
                Search
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            {!isAuthenticated ? (
              <>
                <li className="nav-item m-1">
                  <button
                    className="btn btn-outline w-100"
                    type="button"
                    style={{ color: "grey", outlineColor: "grey" }}
                    onClick={handleLogin}
                  >
                    Sign in
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item m-1">
                  <button
                    className="btn btn-outline w-100"
                    type="button"
                    style={{ color: "grey", outlineColor: "grey" }}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
