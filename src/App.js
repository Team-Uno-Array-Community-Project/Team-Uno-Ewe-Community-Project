import React from "react";

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

import HomepageData from "./components/homepage/HomepageData";
import BlogpageData from "./components/blog/BlogpageData";
import YarnData from "./components/vendorpage/YarnData";
// import FibersData from "../src/components/vendorpage/FibersData";
// import ToolsData from "../src/components/vendorpage/ToolsData";


function App() {
  return (
    <div className="app">
      <header>
        <Navigation />
      </header>
      <main>
        <Switch>
          <Route exact path="/" render={(props) => <HomePage HomepageData={HomepageData} {...props} />}
          />
          <Route exact path="/blog" render={(props) => <BlogPage HomepageData={BlogpageData} {...props} />}
          />
          <Route exact path="/yarn" render={(props) => <VendorPage YarnData={YarnData} {...props} />}
          />
          {/* <Route exact path="/fibers" render={(props) => <VendorPage FibersData={FibersData} {...props} />}
          /> */}
          {/* <Route exact path="/tools" render={(props) => <VendorPage ToolsData={ToolsData} {...props} />}
          /> */}
          <Route path="/contact" component={ContactPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={ErrorPage} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
