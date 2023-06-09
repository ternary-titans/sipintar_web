import React from "react";
import logo from "../../assest/polines.png";

export default function Login() {
  /*const onSubmit = handleSubmit((data) => {
    console.log(data);
  });*/
  return (
    <>
      <div className="max-w-ad w-full mt-4 mx-4">
        <div>
          <img
            src={logo}
            alt=""
            class="w-20
         ..."
          ></img>
        </div>
        <div className="text-center font-extrabold text-5xl">PINTAR</div>
        <div className="text-3xl font-light mt-2 text-center">
          Polines Information and Attender
        </div>
      </div>
      <div className="max-w-md w-full mx-auto bg-indigo-900 p-6 rounded-lg mt-9 shadow-lg shadow-gray-600">
        <form action="" className="space-y-6 ">
          <div>
            <div className="text-xl font-semibold mb-6 text-center text-white">
              Login Administrator
            </div>
            <div class="mb-6">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username..."
              ></input>
            </div>
            <div class="mb-4">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password..."
              ></input>
            </div>
            <div class="mx-36 mt-12">
              <button
                class="bg-yellow-400 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                type="button"
              >
                LOGIN
              </button>
            </div>
          </div>
        </form>
      </div>
      <footer class="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left fixed inset-x-0 bottom-0">
        <div class="p-2 text-center text-neutral-700 dark:text-neutral-200">
          Politeknik Negeri Semarang | 2023
        </div>
      </footer>
    </>
  );
}
