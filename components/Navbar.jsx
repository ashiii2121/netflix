import "./header.css";

function Navbar() {
  return (
    <>
      <div>
        <header className="header">
          <div className="navbar">
            <div className="logo">
              <img src="/netflix.jpg" alt="Netflix Logo" height="50" width="155" />
            </div>
            <div className="L-box">
              <div className="lang">
                <span role="img" aria-label="Language"></span>
                <select name="lang" id="lang">
                  <span>🌐</span>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>
              <div className="signin">
                <a href="#">Sign In</a>
              </div>
            </div>
          </div>
        </header>
        <div className="bg"></div>
      </div>
    </>
  );
}

export default Navbar;
