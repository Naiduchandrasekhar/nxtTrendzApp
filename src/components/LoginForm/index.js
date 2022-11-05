// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', isLogin: true, errorMsg: ''}

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
    this.setState({isLogin: true})
  }

  onSubmitFail = errorMsgValue => {
    this.setState({isLogin: false, errorMsg: errorMsgValue})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}

    const URL = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(URL, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFail(data.error_msg)
    }
  }

  render() {
    const {isLogin, errorMsg} = this.state
    console.log(errorMsg)

    return (
      <div className="mainContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="websiteLogoImageDisplay"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="websiteLoginImage"
        />
        <div className="loginContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="websiteLogoImage"
          />
          <form className="formContainer" onSubmit={this.onSubmitForm}>
            <label className="label" htmlFor="userName">
              Username
            </label>
            <br />
            <input
              className="inputs"
              id="userName"
              type="text"
              placeholder="Username"
              onChange={this.onChangeUserName}
            />
            <br />
            <label className="label" htmlFor="passWord">
              Password
            </label>
            <br />
            <input
              className="inputs"
              id="passWord"
              type="password"
              placeholder="Password"
              onChange={this.onChangePassword}
            />
            <br />
            <button className="submitButton" type="submit">
              Login
            </button>
            {isLogin ? '' : <p className="errorPara">{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
