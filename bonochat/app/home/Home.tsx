'use client';

import H_header from "./components/H_header";
import Mainslide from "./components/Mainslide";
import News from "./components/News";
import Poroly from "./components/Poroly";
import Nubury from "./components/Nubury";

export default function Home() {


  return (
    <section id="home">
      <div className="h_header">
        <H_header />
      </div>
      <Mainslide />
      <div className="news">
        <h3>새로운 소식</h3>
        <News />
      </div>
      <div className="poroly">
        <h3>드라마</h3>
        <Poroly />
      </div>
      <div className="nubury">
        <h3>판타지</h3>
        <Nubury />
      </div>
    </section>
  );
}
