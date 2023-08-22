import axios from "../api/axios";
import useAuth from "../hooks/useAuth";
import logo from "../assest/polines.png";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();

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
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        {
          username: user,
          password: pwd,
        }
      );

      const token = response?.data.data.token;
      const { user_id, username, role, id, nama } = jwt_decode(token);

      setAuth({ id, username, nama, role, user_id, token });
      setUser("");
      setPwd("");

      localStorage.setItem(
        "userData",
        JSON.stringify({ id, username, nama, role, user_id, token })
      );

      if (role === "Mahasiswa") navigate("/mahasiswa");
      if (role === "Dosen") navigate("/dosen");
      if (role === "Admin") navigate("/admin/dashboard");
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
              LOGIN
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
                placeholder="username"
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
                placeholder="password"
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
