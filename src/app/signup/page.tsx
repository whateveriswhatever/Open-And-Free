"use client";
import React, { SetStateAction } from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full h-[100vw] flex flex-row desktop:overflow-hidden">
      <SignUpForm />
      {/* <SideImage /> */}
    </div>
  );
};

export default page;

const SignUpForm: React.FC = () => {
  const [userRegisteredEmail, setUserRegisteredEmail] = useState("");
  const [userRegisterdPassword, setUserRegisteredPassword] = useState("");
  const [userValidPassword, setUserValidPassword] = useState("");
  const [isUserAgreed, setIsUserAgreed] = useState(false);

  const [isDisabled, setIsDisabled] = useState(false);

  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (
      userRegisteredEmail.length === 0 ||
      userRegisterdPassword.length === 0 ||
      userValidPassword.length === 0 ||
      !isUserAgreed
    ) {
      setIsDisabled(false);
      console.log(`is disabled: ${isDisabled}`);
    } else if (
      userRegisteredEmail.length > 10 &&
      userRegisterdPassword.length > 4 &&
      userValidPassword.length === 4 &&
      isUserAgreed &&
      userRegisterdPassword === userValidPassword
    ) {
      setIsDisabled(false);
    }
  }, [
    userRegisteredEmail,
    userRegisterdPassword,
    userValidPassword,
    isUserAgreed,
  ]);

  const handlerSignUpFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    console.log(`Email: ${userRegisterdPassword}`);
    console.log(`Password: ${userRegisterdPassword}`);
    console.log(`Valid password: ${userValidPassword}`);
    console.log(`Is agreed: ${isUserAgreed}`);
    console.log(`Is disabled: ${isDisabled}`);

    try {
      const response = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // application/x-www-form-urlencoded
        },
        // cannot use JSON.stringify() for the body section, I don't even know why. Maybe the underlying reason is laying under the utilization of submitting data through HTML form. Ironically, I've been using this method fairly in Node.js tho.
        body: JSON.stringify({
          email: userRegisteredEmail,
          password: userRegisterdPassword,
        }).toString(),
      });

      const responseData = await response.json();

      if (response.ok) {
        // handle successful registration, redirect user to the Login page or saving token if it feasible
        console.log(`Registered successfully!`);
        // Navigate user to the Login page
        router.push("/login");
      } else {
        // Manifest error message
        setErrorMessage(responseData.message);
      }
    } catch (error) {
      console.error(`Failed in signing up ----> ${error}`);
    }
  };

  return (
    <div className="desktop:h-[40%] phone:h-[100vw] phone:w-[70%] desktop:w-[60%] flex justify-center items-center desktop:mt-[4rem] desktop:overflow-auto phone:ml-[2rem]">
      <div
        id="sign_up_form"
        className="phone:ml-[2rem] phhone:h-[100vw] desktop:mt-[4rem] phone:mt-[15rem]"
      >
        <h2 className="desktop:text-[2rem] font-bold">Create your account</h2>

        <br />

        <form
          id="form"
          className="flex flex-col desktop:h-[100%] desktop:gap-[1rem] phone:gap-[1rem]"
          onSubmit={handlerSignUpFormSubmit}
          onChange={() => {
            if (
              userRegisteredEmail.length === 0 ||
              userRegisterdPassword.length === 0 ||
              userValidPassword.length === 0 ||
              !isUserAgreed
            ) {
              setIsDisabled(false);
            } else {
              setIsDisabled(false);
            }
          }}
        >
          <RegisteredEmail
            inputEmail={userRegisteredEmail}
            setInputEmail={setUserRegisteredEmail}
          />
          <RegisteredPassword
            inputPassword={userRegisterdPassword}
            setInputPassword={setUserRegisteredPassword}
          />
          <ValidatedRegisteredPassword
            inputValidPassword={userValidPassword}
            setInputValidPassword={setUserValidPassword}
            isMatched={userRegisterdPassword === userValidPassword}
          />

          <Policy isAgreed={isUserAgreed} setIsAgreed={setIsUserAgreed} />

          <div className="flex justify-center items-center border-[0.1rem] border-slate-400 rounded-[1rem] bg-amber-400 desktop:h-[36px]">
            <button type="submit" disabled={isDisabled}>
              <p className="desktop:text-[0.8rem] font-bold">Create account</p>
            </button>
          </div>
        </form>

        <div id="had_an_account" className="desktop:mt-[7rem]">
          <div>
            Already have an account?{" "}
            <span>
              <a href="/login" className="underline font-bold">
                Log in
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const RegisteredEmail: React.FC<{
  inputEmail: string;
  setInputEmail: React.Dispatch<React.SetStateAction<string>>;
}> = ({ inputEmail, setInputEmail }) => {
  // const [inputEmail, setInputEmail] = useState("");
  return (
    <>
      <div
        id="email"
        className="border-slate-600 border-[0.1rem] rounded-[0.8rem]"
      >
        <div className="desktop:text-[0.7rem] desktop:ml-[1rem]">
          <p>Email</p>
        </div>
        <input
          type="email"
          placeholder="Registored email"
          className="desktop:ml-[1rem] focus:outline-none"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInputEmail(e.target.value);
          }}
        />
      </div>
    </>
  );
};

const RegisteredPassword: React.FC<{
  inputPassword: string;
  setInputPassword: React.Dispatch<React.SetStateAction<string>>;
}> = ({ inputPassword, setInputPassword }) => {
  const [password, setPassword] = useState("");
  const [isManifested, setIsManifested] = useState(false);
  return (
    <>
      <div
        id="password"
        className="border-slate-600 border-[0.1rem] rounded-[0.8rem]"
      >
        <div className="desktop:text-[0.7rem] desktop:ml-[1rem]">
          <p>Password</p>
        </div>
        <div className="flex flex-row">
          <input
            type={isManifested ? "text" : "password"}
            placeholder="Registered password"
            className="desktop:ml-[1rem] focus:outline-none"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
              setInputPassword(e.target.value);
              // console.log(`Password: ${password}`);
            }}
          />
          <span
            className={`desktop:ml-[2rem] ${
              isManifested
                ? "text-black font-bold desktop:mt-[-0.2rem]"
                : "text-gray-500"
            }`}
            onClick={() => {
              setIsManifested(!isManifested);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={`${isManifested ? "20" : "16"}`}
              height={`${isManifested ? "20" : "16"}`}
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

const ValidatedRegisteredPassword: React.FC<{
  inputValidPassword: string;
  setInputValidPassword: React.Dispatch<React.SetStateAction<string>>;
  isMatched: boolean;
}> = ({ inputValidPassword, setInputValidPassword, isMatched }) => {
  const [password, setPassword] = useState("");
  const [isManifested, setIsManifested] = useState(false);
  return (
    <>
      <div
        id="confirm_password"
        className={`${
          !isMatched ? "border-red-600" : "border-slate-600"
        } border-[0.1rem] rounded-[0.8rem]`}
      >
        <div className="desktop:text-[0.7rem] desktop:ml-[1rem]">
          <p>Confirm password</p>
        </div>
        <div className={`flex flex-row `}>
          <input
            type={isManifested ? "text" : "password"}
            placeholder="Validate password"
            className={`desktop:ml-[1rem] focus:outline-none `}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
              setInputValidPassword(e.target.value);
            }}
          />
          <span
            className={`desktop:ml-[2rem] ${
              isManifested
                ? "text-black font-bold desktop:mt-[-0.2rem]"
                : "text-gray-500"
            }`}
            onClick={() => {
              setIsManifested(!isManifested);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={`${isManifested ? "20" : "16"}`}
              height={`${isManifested ? "20" : "16"}`}
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

const Policy: React.FC<{
  isAgreed: boolean;
  setIsAgreed: React.Dispatch<SetStateAction<boolean>>;
}> = ({ isAgreed, setIsAgreed }) => {
  return (
    <>
      {/* <div id="our_policies">
        <div className="inline-block">
          <p>{"When you click 'Create account', you agree with Fetch "}</p>
          <p>
            <a>Terms and Condition</a>
          </p>
          <p>{`, and confirming that you've read our `}</p>
          <p>
            <a>Policy Notice</a>
          </p>
        </div>
      </div> */}
      <div id="our_policies">
        <div className="desktop:text-[0.9rem] desktop:w-[20rem]">
          <p>
            {"When you click 'Create account', you agree with Open&Free's "}{" "}
            <a href="#" className="underline">
              Terms and Conditions
            </a>
          </p>
          {/* <span>
            <a href="#" className="underline">
              Terms and Conditions
            </a>
          </span> */}
          <p>
            {", and ascertaining that you've read our "}{" "}
            <a href="#" className="underline">
              Privacy Notices
            </a>
          </p>
          {/* <span>
            <a href="#" className="underline">
              Privacy Notices
            </a>
          </span> */}
        </div>
      </div>
      <div className="flex flex-row">
        <input
          type="checkbox"
          name="agree"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setIsAgreed(e.target.checked);
          }}
        />
        <p className="desktop:ml-[0.6rem]">{`I totally agree with Open&Free's policies`}</p>
      </div>
    </>
  );
};

const SideImage: React.FC = () => {
  return (
    <>
      <div
        id="side_img"
        className="float-right flex justify-center items-center desktop:h-[50%] desktop:w-[40%]"
      >
        <Image
          src={
            "https://i.pinimg.com/originals/30/be/05/30be05b7248745bb84d59084c7cb93fd.jpg"
          }
          alt="Side image"
          width={120}
          height={120}
          className="w-fit desktop:h-[500px] desktop:mt-[-7rem]"
        />
        {/* hello */}
      </div>
    </>
  );
};
