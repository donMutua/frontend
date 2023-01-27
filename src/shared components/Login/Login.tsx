import { useState } from "react";

interface Props {}

const LoginForm: React.FC<Props> = () => {
  return (
    <form>
      <div className="mb-4 text-center">
        <h2 className="text-lg mb-6 font-bold">LOGIN</h2>
        <p className="font-light text-color-600 mb-16">
          Please enter your e-mail and password:
        </p>
      </div>
      <div className="mb-4">
        <input
          className="border border-gray-400 p-2 w-full"
          type="email"
          id="email"
          placeholder="Email"
        />
      </div>
      <div className="mb-4">
        <input
          className="border border-gray-400 p-2 w-full"
          type="password"
          id="password"
          placeholder="Password"
        />
      </div>
      <button className="bg-black border text-white font-medium py-2 px-4 w-full transition-colors duration-200 hover:bg-white  hover:border-black hover:text-black  ease-in-out">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
