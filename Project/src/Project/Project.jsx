import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Project.css";
import Footer from "./Footer"
import Home from "./Home"
import Abouts from "./Abouts"
import Contacts from "./Contacts"
import Pages from "./Pages";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

function Project()
{
    return (
        <div>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Abouts />} />
          <Route path="contact" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Pages/>
    <Footer/>
    </div>
    );
}

export default Project;