import React from "react";

import Navbar from "./components/Navbar";
import Store from "./components/Store";
import ShoppingCartProvider from "./context/ShoppingCartContext";
const App = () => {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Store></Store>

    </ShoppingCartProvider>
  );
};

export default App;
