// Write your JS code here

import './index.css'

const Header = () => (
  <nav>
    <div className="navContainer">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="navLogo"
        />
      </div>
      <div className="navBar">
        <ul className="navListLarge">
          <li>Home</li>
          <li>Products</li>
          <li>Cart</li>
          <button className="logoutBtn" type="button">
            Logout
          </button>
        </ul>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png "
          alt="navLogOutImg"
          className="navLogOutImg"
        />
      </div>
    </div>
    <div className="allNavImages">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
          className="navImagesClass"
        />
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png "
          alt="nav products"
          className="navImagesClass"
        />
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png "
          alt="nav cart"
          className="navImagesClass"
        />
      </div>
    </div>
  </nav>
)

export default Header
