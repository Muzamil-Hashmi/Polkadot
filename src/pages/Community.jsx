import React from "react";
import Blog from "../component/element/Blog";
import Cards from "../component/element/Cards";
import Founder from "../component/element/Founder";
import Get from "../component/element/Get";
import Grant from "../component/element/Grant";
import Hero from "../component/element/Hero";
import Join from "../component/element/Join";
import Network from "../component/element/Network";
import Powering from "../component/element/Powering";
import Run from "../component/element/Run";
import Source from "../component/element/Source";

export default function Community() {
  return (
    <div>
        <Join/>
        <Run/>
        <Network/>
        <Grant/>    
        <Founder/>
        <Get/>
      {/* <Hero />
      <Cards />
      <Powering />
      <Source />
      <Founder />
      <Blog /> */}
    </div>
  );
}
