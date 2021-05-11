
import  React from "react";
import { Admin, Resource } from 'react-admin';
import  { AdminBlog }  from './admin/AdminBlog';
import restProvider from 'ra-data-simple-rest';

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
import AdminAccess from "./admin/Admin";

import HomepageData from "./components/homepage/HomepageData";
import BlogpageData from "./components/blog/BlogpageData";
import YarnData from "./components/vendorpage/YarnData";
import FibersData from "./components/vendorpage/FibersData";
import ToolsData from "./components/vendorpage/ToolsData";

function App() {
  // const {AdminBlog} = this.props 
  return (
    <div className="app">
          {/* <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource name="posts" list={AdminBlog} />
</Admin> */}
      <header>
        <Navigation />
);
      </header>
      <main>
        <Switch>
          <Route exact path="/admin" component={AdminAccess} />
          <Route exact path="/" render={(props) => <HomePage HomepageData={HomepageData} {...props} />}
          />
          <Route path="/blog" render={(props) => <BlogPage HomepageData={BlogpageData} {...props} />}
          />
          <Route path="/yarn" render={(props) => <VendorPage ProductShown={YarnData} {...props} />} />
          <Route path="/fibers" render={(props) => <VendorPage ProductShown={FibersData} {...props} />} />
          <Route path="/tools" render={(props) => <VendorPage ProductShown={ToolsData} {...props} />} />
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






