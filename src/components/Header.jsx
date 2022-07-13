import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="text-xl normal-case btn btn-ghost">Uber Calèche</a>
      </div>
      <div className="navbar-end">
      

        <div className="avatar">
          <div className="w-12  m-4 rounded-full">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
    

        <Link to="/login">
        <button className="btn btn-ghost border-solid border-2 border-sky-500">
          <div className="">
            Login
          </div>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
