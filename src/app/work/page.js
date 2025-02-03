import React from "react";
import WorkBanner from "../sections/WorkBanner";
import WorkList from "../sections/WorkList";

export const metadata = {
  title: "Work"
}

const work = () => {
  return (
    <>
      <WorkBanner />
      <WorkList />
    </>
  );
};

export default work;
