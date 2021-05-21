import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";

import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";

import HomePage from "./components/homepage/Homepage";
import Navigation from "./components/HeaderNav";
import ContactPage from "./components/contactpage/Contact";
import ErrorPage from "./components/Error";
import AboutPage from "./components/aboutpage/About";
import BlogPage from "./components/blog/Blogpage";
import VendorPage from "./components/vendorpage/Vendorpage";
import EditStore from "./components/admin/editor_mode/EditStore";
import EditBlog from "./components/admin/editor_mode/EditBlog";
import AdminDash from "./components/admin/AdminDash";

function App() {
  //Redirect visitor to Admin login by pressing and holding Esc Key on keyboard
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) {
        window.location.replace("/admindash");
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div className="app">
      <header>
        <Navigation />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route path="/featured-products" component={VendorPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/admindash" component={AdminDash} />
          <Route path="/editstore" component={EditStore} />
          <Route path="/editblog" component={EditBlog} />
          <Route component={ErrorPage} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
