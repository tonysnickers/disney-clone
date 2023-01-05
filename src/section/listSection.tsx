import React from "react";
import { movieContent } from "../menuItems/menuItems";
import CardSection from "./card";
import { Section } from "../styledComponents/section/section";

const ListSection = () => {
  return (
    <Section>
      {movieContent.map((movie) => (
        <CardSection movie={movie} />
      ))}
    </Section>
  );
};

export default ListSection;
