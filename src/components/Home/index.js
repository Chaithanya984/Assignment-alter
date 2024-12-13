import { Redirect } from "react-router-dom";

import Cookies from "js-cookie";

const Home = (props) => {
  const callButton = () => {
    const { history } = props;
    Cookies.remove("jwt_token");

    history.replace("/login");
  };

  const getToken = Cookies.get("jwt_token");
  console.log(getToken, "llk");
  if (getToken === undefined) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h1>HOME</h1>
      <button onClick={callButton}>Signout</button>
    </div>
  );
};

export default Home;
