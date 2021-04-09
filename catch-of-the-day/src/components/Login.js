import React from "react";
import PropTypes from "prop-types";

const Login = (props) => (
  <nav className="login">
    <h2>Inventory</h2>
    <p>Sign in to manage inventory</p>
    <button onClick={() => props.authenticate("Github")} className="github">
      Log in with Github
    </button>
    <button onClick={() => props.authenticate("Twitter")} className="twitter">
      Log in with Twitter
    </button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
};
export default Login;
