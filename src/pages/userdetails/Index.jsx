import React, { useState } from "react";
import UserDatas from "./UserDatas";
import { useSelector } from "react-redux";

const Index = () => {
  const loggeddata = useSelector((state) => state.allData.loggedInUser);

  console.log("loggedInUser data in daseboard ", loggeddata);

  const [alldata, setAlldata] = useState(loggeddata);

  return alldata.map((data, index) => (
    <UserDatas key={index} name={data.name} email={data.email} />
  ));
};

export default Index;
