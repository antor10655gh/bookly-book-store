import React from "react";
import "./SocialLogin.css";
import googleIcon from "../../../images/social/google.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, googleError] =
    useSignInWithGoogle(auth);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  if (user) {
    const url = `https://warm-castle-28299.herokuapp.com/login`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: user.user.email }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        localStorage.setItem("token", result.token);
      });

    navigate(from, { replace: true });
  }

  if (googleError) {
    toast(googleError?.message);
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="my-3 text-center">
      <div className="d-flex align-items-center">
        <div
          style={{ borderBottom: "1px solid #b8b8b8" }}
          className="w-50"
        ></div>
        <div>
          <p style={{ color: "#7a7a7a" }} className="px-2 mt-2">
            or
          </p>
        </div>
        <div
          style={{ borderBottom: "1px solid #b8b8b8" }}
          className="w-50"
        ></div>
      </div>
      <ToastContainer />
      <div>
        <button onClick={() => signInWithGoogle()} className="googleBtn my-2">
          <img src={googleIcon} alt="" />
          <span className="px-2">Sign In With Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
