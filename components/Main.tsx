import React, { Fragment } from 'react';

function Main() {
  return (
    <Fragment>
        <div id="overlay"></div>
        <div id="mobile-menu" className="mobile-main-menu">
            <ul>
            <li><a href="#">Mission</a></li>
            <li><a href="#">Launches</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Updates</a></li>
            <li><a href="#">Shop</a></li>

            <li className="mobile-only"><a href="falcon9.html">Falcon 9</a></li>
            <li className="mobile-only">
                <a href="falcon-heavy.html">Falcon Heavy</a>
            </li>
            <li className="mobile-only"><a href="dragon.html">Dragon</a></li>
            <li className="mobile-only"><a href="#">Starship</a></li>
            <li className="mobile-only"><a href="#">Human Spaceflight</a></li>
            <li className="mobile-only"><a href="#">Rideshare</a></li>
            <li className="mobile-only"><a href="#">Starlink</a></li>
            </ul>
        </div>

        <header className="main-header">
            <div className="logo">
                <a href="index.html">
                <img src="images/logo.png" alt="SpaceX" />
                </a>
            </div>
            <nav className="desktop-main-menu">
                <ul>
                <li><a href="falcon9.html">Falcon 9</a></li>
                <li><a href="falcon-heavy.html">Falcon Heavy</a></li>
                <li><a href="dragon.html">Dragon</a></li>
                <li><a href="#">Starship</a></li>
                <li><a href="#">Human Spaceflight</a></li>
                <li><a href="#">Rideshare</a></li>
                <li><a href="#">Starlink</a></li>
                <li><a href="#">Shop</a></li>
                </ul>
            </nav>
        </header>

    {/* Hamburger Menu */}
    <button id="menu-btn" className="hamburger" type="button">
      <span className="hamburger-top"></span>
      <span className="hamburger-middle"></span>
      <span className="hamburger-bottom"></span>
    </button>

    {/* Section A */}
    <section className="bg-section-a">
      <div className="section-inner">
        <h4>Upcoming Launch</h4>
        <h2>CRS-25 Mission</h2>
        <a href="#" className="btn">
          <div className="hover"></div>
          <span>Rewatch</span>
        </a>
      </div>

      <div className="scroll-arrow">
        <svg width="30px" height="20px">
          <path
            stroke="#ffffff"
            fill="none"
            stroke-width="2px"
            d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
          ></path>
        </svg>
      </div>
    </section>

    {/* Section B */}
    <section className="section-b">
      <div className="section-inner">
        <h4>Recent Launch</h4>
        <h2>Starlink Mission</h2>
        <a href="#" className="btn">
          <div className="hover"></div>
          <span>Rewatch</span>
        </a>
      </div>

      <div className="scroll-arrow">
        <svg width="30px" height="20px">
          <path
            stroke="#ffffff"
            fill="none"
            stroke-width="2px"
            d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
          ></path>
        </svg>
      </div>
    </section>

    <section className="section-c">
      <div className="section-inner">
        <h4>Recent Mission</h4>
        <h2>SES-22 Mission</h2>
        <a href="#" className="btn">
          <div className="hover"></div>
          <span>Rewatch</span>
        </a>
      </div>

     {/* Section C */}
      <div className="scroll-arrow">
        <svg width="30px" height="20px">
          <path
            stroke="#ffffff"
            fill="none"
            stroke-width="2px"
            d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
          ></path>
        </svg>
      </div>
    </section>

    <section className="section-d">
      <div className="section-inner">
        <h4>Recent Launch</h4>
        <h2>Globalstar FM15 Mission</h2>
        <a href="#" className="btn">
          <div className="hover"></div>
          <span>Rewatch</span>
        </a>
      </div>

      {/* Section-D */}
      <div className="scroll-arrow">
        <svg width="30px" height="20px">
          <path
            stroke="#ffffff"
            fill="none"
            stroke-width="2px"
            d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
          ></path>
        </svg>
      </div>
    </section>

    {/* Section-E */}
    <section className="section-e">
      <div className="section-inner">
        <h2>Starship Update</h2>
        <a href="#" className="btn">
          <div className="hover"></div>
          <span>Rewatch</span>
        </a>
      </div>

      <div className="scroll-arrow">
        <svg width="30px" height="20px">
          <path
            stroke="#ffffff"
            fill="none"
            stroke-width="2px"
            d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
          ></path>
        </svg>
      </div>
    </section>


    {/* Section-F */}
    <section className="section-f">
      <div className="section-inner">
        <h2>Starship to add NASA astronauts on the moon</h2>
        <a href="#" className="btn">
          <div className="hover"></div>
          <span>Rewatch</span>
        </a>
      </div>
    </section>

    </Fragment>
  )
}

export default Main;