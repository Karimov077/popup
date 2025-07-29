import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="dark:bg-black dark:text-white ">
      <Header />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
};

export default App;
