"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

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
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Email: ${userEmail}`);
    console.log(`Password: ${userPassword}`);

    try {
      const response = await fetch(
        "http://localhost/music-app-server-php/APIs/findOneDemo1.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded", // application/json
          },
          // body: JSON.stringify({ email: userEmail, password: userPassword }),
          body: new URLSearchParams({
            email: userEmail,
            password: userPassword,
          }).toString(),
        }
      );

      const userData = await response.json();

      if (userData["status"] === "success") {
        // handle successful login, redirect user or save token
        console.log(`Login successuflly !!!`);
        // Indirect user to the dashboard
        router.push("/");
      } else {
        // Depict error message
        setErrorMessage(userData.message);
      }
    } catch (error) {
      console.error(`Error loggin in ${error}`);
      setErrorMessage("The provided user ain't exist!!! Please try again.");
    }
  };

  return (
    <>
      <form
        id="form"
        className="desktop:mt-[2rem] phone:mt-[2rem]"
        onSubmit={handlerSubmit}
      >
        <LoginEmail inputEmail={userEmail} setInputEmail={setUserEmail} />
        <LoginPassword
          inputPassword={userPassword}
          setInputPassword={setUserPassword}
        />

        <div
          id="submit_section"
          className="flex justify-center desktop:mt-[1.6rem] phone:mt-[1rem] desktop:w-[300px] border-[0.1rem] border-slate-200 rounded-[1rem] bg-fuchsia-200 desktop:h-[40px]"
        >
          <button type="submit" className="flex justify-center items-center">
            <p className="font-bold">Login</p>
          </button>
        </div>
      </form>

      <ForgotPassword />
    </>
  );
};

const LoginEmail: React.FC<{
  inputEmail: string;
  setInputEmail: React.Dispatch<React.SetStateAction<string>>;
}> = ({ inputEmail, setInputEmail }) => {
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
          name="email"
          value={inputEmail}
          className="desktop:ml-[1rem] focus:outline-none"
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setInputEmail(e.target.value)
          }
        />
      </div>
    </>
  );
};

const LoginPassword: React.FC<{
  inputPassword: string;
  setInputPassword: React.Dispatch<React.SetStateAction<string>>;
}> = ({ inputPassword, setInputPassword }) => {
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
            name="password"
            value={inputPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
              setInputPassword(e.target.value);
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
