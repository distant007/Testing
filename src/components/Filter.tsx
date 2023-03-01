// import { FC, useEffect, useState } from "react";
import { IData } from "../App";

function Filter(directions: IData[]) {
  return (
    <>
      {directions.map((item) => {
        <div key={item.code}></div>;
      })}
    </>
  );
}
export default Filter;
