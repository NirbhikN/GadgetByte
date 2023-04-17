import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header"; //* NavBar
import Footer from "./components/Footer"; //* Copyright
import "./index.css";
import HomeScreen from "./screens/HomeScreen"; //* Products
import ProductScreen from "./screens/ProductScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" exact element={<HomeScreen />}></Route>
            <Route path="/product/:id" element={<ProductScreen />}></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
