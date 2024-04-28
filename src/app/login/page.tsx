"use client";
import React from "react";
import { useState } from "react";

const page = () => {
  return (
    <div id="login_page" className="flex flex-row w-[100%] h-[100%]">
      <LoginForm />
    </div>
  );
};

export default page;

const LoginForm: React.FC = () => {
  return (
    <>
      <div
        id="login_form"
        className="desktop:w-[60%] phone:w-[100%] phone:h-[90vw] desktop:h-[40vw] flex flex-col justify-center items-center desktop:gap-[2rem]"
      >
        <div id="heading">
          <h2 className="font-bold desktop:text-[2.5rem] phone:text-[1.2rem]">
            Login to {"Group 3's Music App"}
          </h2>
        </div>

        <Form />
      </div>
    </>
  );
};

const Form: React.FC = () => {
  return (
    <>
      <div id="form" className="desktop:mt-[2rem] phone:mt-[2rem]">
        <LoginEmail />
        <LoginPassword />

        <div
          id="submit_section"
          className="flex justify-center desktop:mt-[1.6rem] phone:mt-[1rem] desktop:w-[300px] border-[0.1rem] border-slate-200 rounded-[1rem] bg-fuchsia-200 desktop:h-[40px]"
        >
          <button type="submit" className="flex justify-center items-center">
            <p className="font-bold">Login</p>
          </button>
        </div>
      </div>

      <ForgotPassword />
    </>
  );
};

const LoginEmail: React.FC = () => {
  return (
    <>
      <div
        id="login_email"
        className="border-slate-600 border-[0.1rem] rounded-[0.8rem]"
      >
        <div className="desktop:text-[0.7rem] desktop:ml-[1rem]">
          <p>Email</p>
        </div>
        <input
          type="email"
          placeholder="Login email"
          className="desktop:ml-[1rem] focus:outline-none"
        />
      </div>
    </>
  );
};

const LoginPassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [isDisplayed, setIsDisplayed] = useState(false);
  return (
    <>
      <div
        id="login_password"
        className="border-slate-600 border-[0.1rem] rounded-[0.8rem] desktop:mt-[1rem] phone:mt-[1rem]"
      >
        <div className="desktop:text-[0.7rem] desktop:ml-[1rem]">
          <p>Password</p>
        </div>

        <div className="flex flex-row">
          <input
            type={isDisplayed ? "text" : "password"}
            placeholder="Login password"
            className="desktop:ml-[1rem] focus:outline-none"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
          />

          <span
            className={`desktop:ml-[2rem] ${
              isDisplayed
                ? "text-black font-bold desktop:mt-[-0.2rem]"
                : "text-gray-500"
            }`}
            onClick={() => setIsDisplayed(!isDisplayed)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={`${isDisplayed ? "20" : "16"}`}
              height={`${isDisplayed ? "20" : "16"}`}
              fill="currentColor"
              className="bi bi-eye"
              viewBox="0 0 16 16"
            >
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};

const ForgotPassword: React.FC = () => {
  return (
    <>
      <div id="forgot_password">
        <a className="underline text-slate-600">Forgot password ?</a>
      </div>
    </>
  );
};
