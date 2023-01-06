import React from "react";
import { SpectacleContent, SpectacleImg, SpectacleText } from "../../styledComponents/spectacle/spectacleStyled";

const Spectacle = () => {
  return (
    <>
      <h1 style={{textAlign: "center"}}>Spectacle</h1>
      <SpectacleContent>
        <SpectacleText>
          <h1>Le Roi Lion</h1>
          <p>Le musical événement revient à Paris</p>
          <p>EN SAVOIR PLUS</p>
        </SpectacleText>
        <SpectacleImg src="https://static.cnews.fr/sites/default/files/styles/image_750_422/public/capture_decran_2020-12-18_a_15.45.16_5fdcc0c4bda18.png?itok=RFjT1SJ1"/>
      </SpectacleContent>
    </>
  );
};

export default Spectacle;
