import React from "react";
import {
  Button,
  HeaderContent,
  HeaderHome,
  Paragraph,
  Title,
} from "../../styledComponents/header/header";
import Navbar from "./navbar";

const Header = () => {
  return (
    <>
      <Navbar />
      <HeaderHome>
        <HeaderContent>
          <Title
            src={
              "https://lumiere-a.akamaihd.net/v1/images/fr_stw-1_lg_r_2x_1790e8e3.png?region=0,0,1000,320"
            }
          />
          <Paragraph>Maintenant en streaming sur Disney+</Paragraph>
          <Button>ABONNEZ-VOUS*</Button>
        </HeaderContent>
      </HeaderHome>
    </>
  );
};

export default Header;
