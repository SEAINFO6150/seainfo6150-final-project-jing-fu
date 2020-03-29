import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home/Home.jsx";
import Error from "./Error/Error.jsx";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Categroy from "./Category/Category.jsx";
import ProductDetail from "./Detail/ProductDetail.jsx";
import Order from "./Order/Order.jsx";
import About from "./About/About.jsx";
import "./App.css";

import magazines from "./data/magazines.json";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Header />
        </header>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          {/* passing parameters via a route path */}
          <Route
            path="/category/:categoryId"
            exact
            render={({ match }) => (
              // getting the parameters from the url and passing
              // down to the component as props
              <Categroy
                categoryId={match.params.categoryId}
              />
            )}
          />
          <Route
            path="/order/:productId"
            exact
            render={({ match }) => (
              <Order
                magazine={
                  magazines.find(magazine => magazine.productId === match.params.productId)
                }
              />
            )}
          />
          <Route
            path="/product-detail/:categoryId/:productId"
            exact
            render={({ match }) => (
              // getting the parameters from the url and passing
              // down to the component as props
              <ProductDetail
                categoryId={match.params.categoryId}
                productId={match.params.productId}
              />
            )}
          />
          <Route component={Error} />
        </Switch>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
