import React from "react";
import { Button, HeaderHome } from "../styledComponents/header";
import Navbar from "./navbar";

const Header = () => {
  return (
    <>
      <Navbar />
      <HeaderHome>
        <Button>ABONNEZ-VOUS</Button>
      </HeaderHome>
    </>
  );
};

export default Header;
