import React from "react";

import HeroContainer from "../components/HeroContainer";
import Button from "../components/Button";

const Home: React.FC = () => {
  return (
    <>
      <HeroContainer>
        <h1 className="text-5xl md:text-7xl font-semibold text-gray-800 font-sans">
          Provjerite tečajne liste
        </h1>
        <h2 className="text-xl md:text-3xl text-gray-800">Brzo i jednosavno</h2>

        <Button primary className="mt-5">
          Press me
        </Button>
      </HeroContainer>
    </>
  );
};

export default Home;
