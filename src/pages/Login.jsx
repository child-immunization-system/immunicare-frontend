import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import googleIcon from "../assets/google-logo.svg";
import image from "../assets/rafiki.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [data, setData] = useState({ username: "", password: "" });
  const [inputErrors, setInputErrors] = useState({ username: false, password: false });

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {

    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });

    setInputErrors({
      ...inputErrors,
      [e.target.name]: false
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new URLSearchParams();
    formData.append('grant_type', 'password');
    formData.append('username', data.username);
    formData.append('password', data.password);
    formData.append('scope', '');
    formData.append('client_id', '');
    formData.append('client_secret', '');

    // Check for empty fields
    if (!data.username || !data.password) {
      setInputErrors({
        username: !data.username,
        password: !data.password
      });
      setError("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    axios
      .post("https://child-immunization-tracking-systems.onrender.com/api/v1/auth/token", formData, {
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then((response) => {
        console.log(response, response.data.token);
        localStorage.setItem('user-info', JSON.stringify(response));

        const userData = localStorage.getItem('user-info');
        const userdetail = JSON.parse(userData);

        if (userdetail.data.type === 'admin') {
          navigate("/dashboard");
        } else {
          navigate("/dashboard");
        }
      })
      .catch((error) => {

        if (error.response) {
          console.log("Error response:", error.response);
          setError(error.response.data.detail || "An error occurred");
          setInputErrors({
            ...inputErrors,
            password: true
          });
        } else if (error.request) {
          console.log("Network error");
          setError("Network error");
        } else {
          console.log("Error:", error.message);
          setError(error.message);
        }

      })
      .finally(() => {
        setLoading(false); 
      });
  };
    
  const LoadingDots = () => {
    return (
        <div className="loading-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
        </div>
    );
};

  return (
    <div className="w-full h-screen flex justify-around items-center">

      {/*<div className="bg-authBg w-[50%] h-full bg-no-repeat bg-cover bg-center"></div>*/}

      <img src={image} alt="" className="w-[45%]" />

      <div className="w-[35%] flex flex-col justify-center ">
        
        <p className="text-[#3632FF] text-[34px] font-bold">Welcome back !</p>

        <p className="text-[#262626] text-[19px] font-medium text-base">
          Login to Your Account to Continue
        </p>

        <form onSubmit={handleSubmit} className="w-full mt-[20px]">

          <label className="text-[#555555] text-[16px] font-semibold"> Email </label>
          <div className="w-full flex items-center border ${inputErrors.username ? 'border-red-500' : 'border-[#BCBBFF]'} outline-none h-[50px] py-[10px] rounded-[8px] mt-3 mb-3">
            <div className="px-3 py-2 text-[#9A98FF]"> <FontAwesomeIcon icon={faEnvelope} /> </div>
            <input type="text" onChange={handleChange} name="username"
              className="w-full px-3 py-2 focus:outline-none"
              placeholder="Enter Email Address" value={data.username}
            />
          </div>

          <label className="text-[#555555] text-[16px] font-semibold"> Password </label>
          <div className="w-full flex items-center border ${inputErrors.password ? 'border-red-500' : 'border-[#BCBBFF]'} outline-none h-[50px] py-[10px] rounded-[8px] mt-3 mb-3">
            <div className="px-3 py-2 text-[#9A98FF]"> <FontAwesomeIcon icon={faLock} /> </div>
            <input type={passwordVisible ? "text" : "password"} name="password"
              className="w-full px-3 py-2 focus:outline-none" placeholder="Password" 
              onChange={handleChange} value={data.password}
            />
            <button type="button" className="px-3 py-2 text-[#5854FF]" onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
            </button>
          </div>
      
          {error && <div className="text-red-500 mb-3">{error}</div>}

          <div className="flex justify-between items-center">

            <div className="flex items-center">
              <input type="checkbox" id="remember" name="remember" className="hidden peer" />
              <label htmlFor="remember"
                className="mr-2 w-4 h-4 border-2 border-blue-500 rounded-sm flex items-center justify-center cursor-pointer peer-checked:bg-blue-500"
              >
                <svg className="w-3 h-3 text-white hidden peer-checked:block"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"               
                  />
                </svg>
              </label>
              <label htmlFor="remember" className="text-[#262626] text-[14px] font-medium"> Remember me </label>
            </div>

            <a href="/forgot-password"
              className="text-[#5854FF] text-[16px] font-semibold underline flex justify-end mt-2"
            > Forgot password ?
            </a>

          </div>

          <button  disabled={loading}
            className="w-full h-[50px] flex justify-center items-center bg-[#3632FF] rounded-[8px] px-[10px] mt-[32px] text-[#FFFFFF] text-[12px] font-medium"
          >
            {loading ? <LoadingDots /> : "Login"}
          </button>

          <div className="w-1/2 m-auto flex items-center my-4">
            <hr className="flex-grow border-t border-[#D4D4D4]" />
            <span className="px-3 text-[#262626] text-[16px] font-normal"> Or </span>
            <hr className="flex-grow border-t border-[#D4D4D4]" />
          </div>

          <button className="w-full h-[50px] flex justify-center items-center border border-[#3632FF] rounded-[8px] px-[10px] mt-[14px] text-[#3632FF] text-[16px] font-semibold">
            <img src={googleIcon} alt="google-icon" className="mr-2" />
            Sign In with Google
          </button>

          <p className="mt-[10px] text-[#262626] text-center text-[16px] font-normal"> dont’t have an account?{" "}
            <Link to="/register" className="text-[#3632FF] font-semibold"> Sign up </Link>{" "}
            now!
          </p>

          <p className="mt-5 text-[#262626] text-[12px] font-medium text-center"> By signing in, you agree to{" "} </p>

          <p className="text-[#3632FF] text-[12px] font-medium text-center">
            our Terms of Service, Privacy Policy and Acceptable Use Policy.
          </p>

        </form>

      </div>

    </div>
  );
}

export {Login};
