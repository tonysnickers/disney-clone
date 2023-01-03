import React from "react";
import Header from "./components/header";
import SectionParc from "./components/SectionParc";
import Index from "./pages";
import ListSection from "./section/listSection";
import { Home } from "./styledComponents/header";

function App() {
  return (
    <Home>
      <Header />
      <ListSection/>
      <SectionParc/>
    </Home>
  );
}

export default App;
