import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from './auth-context.js'

const Navbar = props => (
  <AuthContext.Consumer>
    {(context) => {
      return (
        <Fragment>
          <div className="col-md-6 col-lg-10 col-xl-7 header-search-box d-none d-lg-block">
            <div
              id="main-menu-2"
              className="main-menu-desktop no-border main-menu-sh"
            >
              <div className="menu-container wd-megamenu text-left">
                <div className="menu">
                  <ul className="wd-megamenu-ul">
                    <li>
                      <Link to='/HomePage' className="main-menu-list">
                        <i
                          className="fa fa-home"
                          aria-hidden="true"
                        ></i>{" "}
                                  Home{"  "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/WishList"
                        className="main-menu-list"
                      >
                        WishList{"  "}
                      </Link>
                    </li>
                    <li className="pos-inherit">
                    <Link
                        to="/About"
                        className="main-menu-list"
                      >
                        About{"  "}
                      </Link>
                    </li>
                    <li>
                    <Link
                        to="/Contact"
                        className="main-menu-list"
                      >
                        Contact us{"  "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-10 col-sm-6 col-md-4 col-lg-2 col-xl-2 text-right">
            <div className="account-section">
              <button className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg2">
                <i className="fa fa-sign-in" aria-hidden="true" />
                <span>{context.token ? <a type="button" onClick={context.logout}>Logout</a> : <Link to="/Login">Log in/Register</Link>}</span>
              </button>
            </div>
          </div>





          {/* // <ul>

        //   <li><Link to='/Review'>Review</Link></li>
        //   <li><Link to='/ProductDetail'>Product Detail</Link></li>
        //   <li><Link to='/Header'>Header Top</Link></li>
        //   <li><Link to='/Login'>Login</Link></li>
        //   <li><Link to='/HomePage'>Home Page</Link></li>
        //   <li><Link to='/SearchResult'>Search Result</Link></li>
        //   <li><a href="http://localhost:3000/SearchResult">Search Result</a></li>
        // </ul> */}
        </Fragment>
      )
    }}
  </AuthContext.Consumer >
);
export default Navbar;