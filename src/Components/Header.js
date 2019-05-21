import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
  render() {

    return (
        <nav id="nav-wrap">

            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
                {/* <li className="current"><a className="smoothscroll" href="#home">Home</a></li> */}
                <li>
                    <Link to="/" className="smoothscroll">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="smoothscroll">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/resume" className="smoothscroll">
                        Resume
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio" className="smoothscroll">
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="smoothscroll">
                        Contact
                    </Link>
                </li>
            </ul>

        </nav>
    );
  }
}

export default Header;
