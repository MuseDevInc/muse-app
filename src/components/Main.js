import React from "react";
import { NavBar } from "./navbar/NavBar";
import { MuseWindow } from "./MuseWindow";

export function Main() {
  let backGrad = "linear-gradient(1deg, #00377C 40%, #F5F5F5)";

  return (
    <div>
      <NavBar />
      <MuseWindow gradient={backGrad} />
    </div>
  );
}
