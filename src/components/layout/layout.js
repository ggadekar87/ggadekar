import Header from "../header/header";
import './layout.css'
const Layout = (props) => {
  return (
    <>
      <div className="layout">
        <div>
          <Header></Header>
        </div>
        <div>
          <main className="Content">{props.children}</main>
        </div>
        <footer>
          footer
        </footer>
      </div>
    </>
  );
};

export default Layout;
