import React from "react";
import HeadNav from "./HeadNav";
import Main from "./Main";
import Tail from "./Tail";

const Dashboard = () => {
  return (
    <div className="overflow-x-hidden">
      <HeadNav />
      <Main />
      <Tail />
    </div>
  );
};

export default Dashboard;
