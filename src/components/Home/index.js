// Write your JS code here
import Header from '../Header/index'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="homeContainer">
      <div className="imageAndParaContainer">
        <h1 className="headerName">Clothes That Get You Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
          alt="clothes that get you noticed"
          className="clothesImageDisplay"
        />
        <p className="para">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in revolution. Your fashion makes you been seen and heard that
          way you are. So, celebrate the seasons new and exciting fashion in
          your own way.
        </p>
        <button className="shopNowBtn" type="button">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
        alt="clothes that get you noticed"
        className="clothesImage"
      />
    </div>
  </>
)

export default Home
