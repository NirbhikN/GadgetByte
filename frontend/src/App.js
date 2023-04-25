import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header"; //* NavBar
import Footer from "./components/Footer"; //* Copyright
import "./index.css";
import HomeScreen from "./screens/HomeScreen"; //* All Products
import ProductScreen from "./screens/ProductScreen"; //* Single Product
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/login" element={<LoginScreen />}></Route>
            <Route path="/register" element={<RegisterScreen />}></Route>
            <Route path="/product/:id" element={<ProductScreen />}></Route>
            <Route path="/cart/:id?" element={<CartScreen />}></Route>
            <Route path="/" exact element={<HomeScreen />}></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
