import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {

  
  return (
    <>
      <div className="layout-page">
        <nav
          className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
          id="layout-navbar"
        >
          <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
            <a
              className="nav-item nav-link px-0 me-xl-4"
              href="javascript:void(0)"
            >
              <i className="ti ti-menu-2 ti-md"></i>
            </a>
          </div>

          <div
            className="navbar-nav-right d-flex align-items-center"
            id="navbar-collapse"
          >
            <div className="navbar-nav align-items-center">
              <div className="nav-item dropdown-style-switcher dropdown">
                <a
                  className="nav-link btn btn-text-secondary btn-icon rounded-pill dropdown-toggle hide-arrow"
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                >
                  <i className="ti ti-md"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-start dropdown-styles">
                  <li>
                    <a
                      className="dropdown-item"
                      href="javascript:void(0);"
                      data-theme="light"
                    >
                      <span className="align-middle">
                        <i className="ti ti-sun me-3"></i>Light
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="javascript:void(0);"
                      data-theme="dark"
                    >
                      <span className="align-middle">
                        <i className="ti ti-moon-stars me-3"></i>Dark
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="javascript:void(0);"
                      data-theme="system"
                    >
                      <span className="align-middle">
                        <i className="ti ti-device-desktop-analytics me-3"></i>
                        System
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <ul className="navbar-nav flex-row align-items-center ms-auto">
              <li className="nav-item navbar-dropdown dropdown-user dropdown">
                <a
                  className="nav-link dropdown-toggle hide-arrow p-0"
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                >
                  <div className="avatar avatar-online">
                    <img
                      src="../../assets/img/avatars/1.png"
                      alt
                      className="rounded-circle"
                    />
                  </div>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item mt-0" href="#">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-2">
                          <div className="avatar avatar-online">
                            <img
                              src="../../assets/img/avatars/1.png"
                              alt
                              className="rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0">John Doe</h6>
                          <small className="text-muted">Admin</small>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div className="dropdown-divider my-1 mx-n2"></div>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="ti ti-user me-3 ti-md"></i>
                      <span className="align-middle">My Profile</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="ti ti-settings me-3 ti-md"></i>
                      <span className="align-middle">Settings</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="d-flex align-items-center align-middle">
                        <i className="flex-shrink-0 ti ti-file-dollar me-3 ti-md"></i>
                        <span className="flex-grow-1 align-middle">
                          Billing
                        </span>
                        <span className="flex-shrink-0 badge bg-danger d-flex align-items-center justify-content-center">
                          4
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <div className="dropdown-divider my-1 mx-n2"></div>
                  </li>
                  <li>
                    <div className="d-grid px-2 pt-2 pb-1">
                      <Link to="/">
                        <a className="btn btn-sm btn-danger d-flex">
                          <small className="align-middle text-white">Logout</small>
                          <i className="ti ti-logout ms-2 ti-14px"></i>
                        </a>
                      </Link>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
