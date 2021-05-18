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
import FibersData from "./components/vendorpage/FibersData";
import ToolsData from "./components/vendorpage/ToolsData";

import EditStore from "./components/admin/editor_mode/EditStore";
import EditBlog from "./components/admin/editor_mode/EditBlog";


import AdminDash from "./components/admin/AdminDash";

import "./components/admin/AdminDash.css";
// import MessageData from "./components/admin/mailbox/MessageData";

function App() {
  return (
    <div className="app">
      <header>
        <Navigation />
      </header>
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <HomePage HomepageData={HomepageData} {...props} />
            )}
          />
          <Route
            path="/blog"
            render={(props) => (
              <BlogPage HomepageData={BlogpageData} {...props} />
            )}
          />
          <Route
            path="/featured-products"
            component={VendorPage}
          />
          {/* <Route
            path="/fibers"
            render={(props) => (
              <VendorPage ProductShown={FibersData} {...props} />
            )}
          /> */}
          {/* <Route
            path="/tools"
            render={(props) => (
              <VendorPage ProductShown={ToolsData} {...props} />
            )}
          /> */}
          <Route path="/contact" component={ContactPage} />
          <Route path="/about" component={AboutPage} />

          <Route path="/admindash" component={AdminDash} />
          {/* <Route
            path="/admindash/"
            render={(props) => <AdminDash MessageData={MessageData} {...props} />}
          /> */}
          <Route path="/admindash/editstore" component={EditStore} />
          <Route path="/editblog" component={EditBlog} />

          <Route component={ErrorPage} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
