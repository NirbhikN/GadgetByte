import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { register } from "../actions/userActions";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister; //* the values will be coming from userReducers

  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Password donot match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <center className="whole-content">
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}

      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="form-group mt-3">
              <label>Name</label>
              <input
                type="name"
                className="form-control mt-1"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="btn btn-primary rounded"
                onClick={submitHandler}
              >
                Submit
              </button>
            </div>
            <div className="gotologin">
              Have an Account?{" "}
              <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
                <b>Login</b>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </center>
  );
};

export default RegisterScreen;
