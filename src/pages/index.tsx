/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Header from "../components/header";
import SectionParc from "../components/SectionParc";
import ListSection from "../section/listSection";
import { searchMovie } from "../api/index";
import ProductSlider from "../swiper/ProductSlider";

const Index = () => {
  const { data, error, loading } = searchMovie();

  return (
    <div>
      <Header />
      <ListSection />
      <SectionParc />
      <ProductSlider movies={data} />
    </div>
  );
};

export default Index;
