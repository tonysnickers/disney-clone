/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Header from "../components/header/header";
import SectionParc from "../components/section/SectionParc";
import ListSection from "../section/listSection";
import { searchMovie } from "../api/index";
import ProductSlider from "../components/swiper/ProductSlider";
import Spectacle from "../components/spectacle/Spectacle";

const Index = () => {
  const { data, error, loading } = searchMovie();
  console.log(data);

  return (
    <>
      <Header />
      <ListSection />
      <SectionParc />
      <ProductSlider movies={data} />
      <Spectacle/>
    </>
  );
};

export default Index;
