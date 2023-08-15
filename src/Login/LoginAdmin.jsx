import { useRef, useState, useEffect } from "react";
import axios from "../api/axios";
import logo from "../assest/polines.png";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();
  // Add this line to use the navigate hook

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/login-api", {
        email: user,
        password: pwd,
      });
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const roles = response?.data?.role;
      setAuth({ email: user, password: pwd, roles });
      setUser("");
      setPwd("");

      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      <div className="min-w-full mt-2 mx-4">
        <img src={logo} alt="" className="w-20"></img>
        <div className="text-center font-extrabold text-5xl">PINTAR</div>
        <div className="text-3xl font-light mt-2 text-center">
          Polines Information and Attender
        </div>
      </div>
      <div className="max-w-md mx-auto bg-indigo-900 p-6 rounded-lg mt-9 shadow-lg shadow-gray-600">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="text-xl font-semibold mb-6 text-center text-white">
              Login
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
            </div>
            <div className="mx-36 mt-8">
              <button className="bg-yellow-400 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                LOGIN
              </button>
            </div>
          </div>
        </form>
      </div>
      <footer className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left fixed inset-x-0 bottom-0">
        <div className="p-2 text-center text-neutral-700 dark:text-neutral-200">
          Politeknik Negeri Semarang | 2023
        </div>
      </footer>
    </>
  );
};

export default Login;