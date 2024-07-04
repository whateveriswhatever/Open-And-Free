import React from "react";

const HeaderNav: React.FC<{ context: string }> = ({ context }) => {
  return (
    <div className="flex justify-between">
      <>
        <LeftSubHeaderNav context={context} />
      </>

      <>
        <CloseSection />
      </>
    </div>
  );
};

export default HeaderNav;

export const LogoBrand: React.FC = () => {
  return (
    <>
      <div className="desktop:text-[1.4rem]">Open&Free</div>
    </>
  );
};

export const HeaderSubScript: React.FC<{
  context: string;
}> = ({ context }) => {
  return (
    <>
      <div>{context}</div>
    </>
  );
};

const LeftSubHeaderNav: React.FC<{ context: string }> = ({ context }) => {
  return (
    <>
      <div
        id=""
        className="flex justify-between desktop:w-[320px] items-center"
      >
        <>
          <LogoBrand />
        </>

        <>
          <HeaderSubScript context={context} />
        </>
      </div>
    </>
  );
};

const CloseSection: React.FC = () => {
  return (
    <>
      <div
        id="close_&_out"
        className="flex justify-evenly items-center desktop:w-[80px] desktop:text-[0.9rem]"
      >
        <>
          <div>Close</div>
        </>

        <>
          <div id="close_icon" className="desktop:w-[20px] desktop:h-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-x desktop:w-[20px] desktop:h-[20px]"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          </div>
        </>
      </div>
    </>
  );
};
