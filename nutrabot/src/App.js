import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import HomePage from "./Components/HomePage";
import UserPage from "./Components/UserPage";
import Resources from "./Components/Resources";
import SearchResultPage from "./Components/SearchResultPage";
import functions from "./Components/util/edamamAPI";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      searchedProducts: [],
      redirect: false,
      apiError: false,
      invalidInput: false,
    };
  }

  clearSearch = () => {
    this.setState({
      searchedProducts: "",
      input: "",
    });
  };

  handleInput = (e) => {
    const { value } = e.target;
    this.setState({
      input: value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { input } = this.state;
    const pathname = window.location.pathname;

    if (pathname !== "/searchresults" && input) {
      this.setState({
        redirect: true,
      });
    }

    if (input) {
      try {
        const searchedProducts = await functions.getProduct(input);
        this.setState({
          input: "",
          invalidInput: false,
          apiError: false,
          searchedProducts,
        });
        console.log(searchedProducts[0].food.nutrients.CHOCDF);
      } catch (e) {
        console.log(`API error ${e}`);
        this.setState({
          apiError: true,
        });
      }
    } else {
      this.setState({
        invalidInput: true,
      });
    }
  };

  addtoMymeals = () => {};

  render() {
    const { input, redirect, searchedProducts, invalidInput } = this.state;
    return (
      <div>
        <Navbar clearSearch={this.clearSearch} />
        <SearchBar
          input={input}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
        {invalidInput && "Please enter valid input"}
        <Switch>
          {redirect && <Redirect exact to={"/searchresults"} />}
          <Route exact path="/" render={(props) => <HomePage />}></Route>
          <Route path="/mymeals" render={(props) => <UserPage />}></Route>
          <Route path="/resources">
            <Resources />{" "}
          </Route>
          <Route
            to="/searchresults"
            render={(props) => (
              <SearchResultPage
                {...props}
                searchedProducts={searchedProducts}
                addtoMymeals={this.addtoMymeals}
              />
            )}
          ></Route>{" "}
        </Switch>
      </div>
    );
  }
}
