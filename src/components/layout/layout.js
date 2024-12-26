import Header from "../header/header";
import { Route, Routes } from "react-router";
import Home from "../home/home";
import Contact from "../contact/contact";
const Layout = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Layout;
