import classes from "./App.scss";
import About from "./components/about/About";
import Advantages from "./components/advantages/Advantages";
import Construction from "./components/construction/Construction";
import Consultation from "./components/consultation/Consultation";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Layout from "./components/layout/Layout";
import MainBaner from "./components/mainBaner/MainBaner";
import PhotoGallery from "./components/photoGallery/PhotoGallery";
import CardResidence from "./components/cardResidence/CardResidence";
import React from "react";
import Header from "./components/header/Header";

function App() {
  return (
    <div className={classes.app}>
      {/* <CardResidence/> */}
      <Header />
      <MainBaner />
      <About />
      <Advantages />
      <Layout />
      <PhotoGallery />
      <Consultation />
      <Construction />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
