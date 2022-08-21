import React, { useState } from "react";
// import { Navbar, Container, Nav } from "react-bootstrap";
import { Navbar, Container } from "react-bootstrap";
import { IconContext } from "react-icons";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { CgProfile, CgMenu } from "react-icons/cg";
import { MdClear, MdFavoriteBorder } from "react-icons/md";

function Header() {
  const [inputValue, setInputValue] = useState("");
  const [showSearchBox, showSearch] = useState(false);
  return (
    <div className="app-header">
      <Navbar bg="dark" variant="dark">
        <Container>
          <div className="grid">
            <div className="grid-item-left">
              <div className="site-header-icon logo">
                <Navbar.Brand href="/">LOGO</Navbar.Brand>
              </div>
            </div>
            <div className="grid-item-right">
              { showSearchBox &&
                <div className="site-header-icon searchBox">
                  <input 
                    type="text" 
                    placeholder="search..." 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  { inputValue && 
                    <span 
                      className="clearIcon" 
                      onClick={() => setInputValue("")} 
                      role="presentation"
                    >
                      <MdClear />
                    </span>
                  }
                </div>
              }
              <IconContext.Provider
                value={{ color: "white", size: "25px" }}
              >
              <div 
                className="site-header-icon searchIcon"
                onClick={() => showSearch(!showSearchBox)} 
                role="presentation"
              >
                <FaSearch />
              </div>
                <div className="site-header-icon cartIcon">
                  <Navbar.Brand href="/cart"><FaShoppingCart /></Navbar.Brand>
                </div>
                <div className="site-header-icon favIcon">
                  <Navbar.Brand href="/favorite"><MdFavoriteBorder /></Navbar.Brand>
                </div>
                <div className="site-header-icon profileImage">
                  <Navbar.Brand href="/login"><CgProfile /></Navbar.Brand>
                </div>
                <div className="site-header-icon homeIcon">
                  <Navbar.Brand><CgMenu /></Navbar.Brand>
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;