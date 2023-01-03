import React from "react";
import Header from "./components/header";
import SectionParc from "./components/SectionParc";
import Index from "./pages";
import Router from "./router/router";
import ListSection from "./section/listSection";
import { Home } from "./styledComponents/header";

function App() {
  return (
    <Home>
      <Router/>
    </Home>
  );
}

export default App;
