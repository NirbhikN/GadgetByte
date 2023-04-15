import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header"; //* NavBar
import Footer from "./components/Footer"; //* Copyright
import "./index.css";
import HomeScreen from "./screens/HomeScreen"; //* Products

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
