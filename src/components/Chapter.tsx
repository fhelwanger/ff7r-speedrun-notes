import React from "react";
import IndexTitle from "./IndexTitle";

export interface ChapterProps {
  number: number;
  children?: React.ReactNode;
}

function Chapter({ number, children }: ChapterProps) {
  return (
    <>
      <IndexTitle id={"chapter-" + number} text={"Chapter " + number} />
      {children}
    </>
  );
}

export default Chapter;
