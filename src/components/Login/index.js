import { Component } from "react";
import { Redirect } from "react-router-dom";

import Cookies from "js-cookie";
import logo from "./";
import "./index.css";

const loginarr = [];

class Login extends Component {
  state = { email: "", error: false };

  callingApi = () => {
    const { email } = this.state;
    const { history } = this.props;

    const first = email.endsWith("@gmail.com");
    const second = email.endsWith(".com");
    if (first || second) {
      Cookies.set("jwt_token", email, { expires: 30 });
      history.replace("/");
    }

    this.setState({ error: true });
  };

  changingGmail = (event) => {
    const { email } = this.state;

    this.setState({ email: event.target.value });
  };

  render() {
    const { email, error } = this.state;
    const getToken = Cookies.get("jwt_token");
    console.log("ytrd", getToken);
    if (getToken !== undefined) {
      console.log("tested");
      return <Redirect to="/" />;
    }
    return (
      <div className="bg-container">
        <div className="display-cont">
          <div className="display-down">
            <div>
              <img src="/images/look1.png" alt="look1" />
            </div>
            <div>
              <img src="/images/look2.png" alt="look2" />
            </div>
            <div>
              <img src="/images/look3.png" alt="look3" />
            </div>
          </div>
          <div className="display-down">
            <div>
              <img src="/images/look4.png" alt="look4" />
            </div>
            <div>
              <img src="/images/look5.png" alt="look5" />
            </div>
            <div>
              <img src="/images/look6.png" alt="look6" />
            </div>
          </div>
          <div className="display-down">
            <div>
              <img src="/images/look7.png" alt="look7" />
            </div>
            <div>
              <img src="/images/look8.png" alt="look8" />
            </div>
            <div>
              <img src="/images/look9.png" alt="look9" />
            </div>
          </div>
        </div>
        <div className="login-cont">
          <div className="logo-cont">
            <div className="logo-s">
              <img src="/images/logo.png" alt="logo" />
              <h2>Vibesnap</h2>
            </div>
            <h3>Moments That Matter, Shared Forever</h3>
          </div>
          <input type="text" value={email} onChange={this.changingGmail} />
          {error && <p>Please complete your gmail.com</p>}
          <button onClick={this.callingApi}>sigin</button>
        </div>
      </div>
    );
  }
}

export default Login;
