import React from "react";
import { Parcs } from "../menuItems/menuItems";
import CardSection from "../section/card";
import { ParcSection } from "../styledComponents/section/section";

const SectionParc = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Parcs</h1>
      <ParcSection>
        {Parcs.map((parc, index) => (
          <CardSection movie={parc} />
        ))}
      </ParcSection>
    </>
  );
};

export default SectionParc;
