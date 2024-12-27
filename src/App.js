import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/layout/layout";

import { Route, Routes } from "react-router";
import Home from "./components/home/home";
import Contact from "./components/contact/contact"
import About from "./components/about/about";
function App() {
  let routes = (
    <Routes>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="aboutme" element={<About />} />
    </Routes>
  );
  return (
    <div className="App">
      <Layout> {routes} </Layout>
    </div>
  );
}

export default App;
