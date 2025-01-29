import React from "react";

const Operator = () => {
  return (
    <div className="w-full phone:text-[0.5rem] tablet:text-[0.8rem] desktop:text-[0.85rem] flex flex-row justify-center">
      <div className="phone:w-[200px] tablet:w-[300px] desktop:w-[400px] laptop:w-[400px] flex flex-row justify-between">
        <Section title="Make music" hrefAttribute="/make_music" />
        <Section title="Distribute" hrefAttribute="/distribute" />
        <Section title="Collaborate" hrefAttribute="/collaborate" />
        <Section title="Grow" hrefAttribute="/grow" />
      </div>
    </div>
  );
};

export default Operator;

type SectionType = {
  title: String;
  hrefAttribute: any;
};

const Section: React.FC<SectionType> = ({ title, hrefAttribute }) => {
  return (
    <div>
      <a href={hrefAttribute} className="font-bold">
        {title}
      </a>
    </div>
  );
};
