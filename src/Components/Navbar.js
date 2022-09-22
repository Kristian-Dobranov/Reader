import React from "react";

function Navbar() {
  return (
    // NAVIGATION
    <nav className="navigation">
      {/* TopBar */}
      <div className="topBar">
        {/* Logo */}
        <h1 className="navigation__title"><i class="fas fa-book"></i> READER</h1>
        {/* Contacts */}
        <div className="contacts">
          <a href="" target="blanc__"><i class="fab fa-facebook-f"></i></a>
          <a href="" target="blanc__"><i class="fab fa-twitter"></i></a>
          <a href="" target="blanc__"><i class="fab fa-google-plus-g"></i></a>
          <a href="" target="blanc__"><i class="fab fa-github"></i></a>
        </div>
      </div>

      {/* BottomBar */}
      {/* Nav Links  */}
      <div className="bottomBar">
        <ul className="navigation__links">
          <li className="navigation__link"><a href="">Home</a></li>
          <li className="navigation__link"><a href="">Books</a></li>
          <li className="navigation__link"><a href="">Contact</a></li>
        </ul>

        {/* Search form */}
        <form className="searchForm" action="">
          <input type="text" placeholder="Search" />
          <button><i class="fas fa-search"></i></button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
