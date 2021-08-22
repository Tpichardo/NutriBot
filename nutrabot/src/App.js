import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import HomePage from "./Components/HomePage";
import UserPage from "./Components/UserPage";
import Resources from "./Components/Resources";
import SearchResultPage from "./Components/SearchResultPage";
import functions from "./Components/util/edamamAPI";
import firebase from "./Components/util/firebase";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    input: "",
    searchedProducts: [],
    searchedRecipes: [],
    apiError: false,
    invalidInput: false,
  };

  clearSearch = () => {
    this.setState({
      input: "",
      searchedProducts: [],
      searchedRecipes: [],
      apiError: false,
      invalidInput: false,
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

    if (input) {
      try {
        const searchedProducts = await functions.getProduct(input);
        const searchedRecipes = await functions.getRecipe(input);
        this.setState({
          input: "",
          invalidInput: false,
          apiError: false,
          searchedProducts,
          searchedRecipes,
        });
      } catch (e) {
        console.log(`API error ${e}`);
        this.setState({
          apiError: true,
          input: "",
          invalidInput: false,
          searchedProducts: [],
          searchedRecipes: [],
        });
        this.clearSearch();
      }
    } else {
      this.setState({
        input: "",
        invalidInput: true,
        apiError: false,
        searchedRecipes: [],
        searchedProducts: [],
      });
    }
    this.props.history.push("/searchresults");
  };

  addtoMymeals = (name, caloryCount, protein, carbs, fat) => {
    const mealRef = firebase.database().ref("Meals");
    const meal = {
      mealName: name,
      mealCalories: caloryCount.toFixed(1),
      mealFat: fat.toFixed(1),
      mealCarbs: carbs.toFixed(1),
      mealProtein: protein.toFixed(1),
    };
    mealRef.push(meal);
    this.props.history.push("/mymeals");
  };

  render() {
    const { input, searchedProducts, searchedRecipes, invalidInput, apiError } =
      this.state;
    return (
      <div>
        <Navbar clearSearch={this.clearSearch}   input={input}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit} />
        {/* <SearchBar
          input={input}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        /> */}
        {invalidInput && "Please enter valid input"}

        <Switch>
          <Route exact path={"/"}>
            <HomePage />
          </Route>
          <Route path="/mymeals">
            <UserPage addtoMymeals={this.addtoMymeals} />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>

          <Route path="/searchresults">
            <SearchResultPage
              apiError={apiError}
              searchedProducts={searchedProducts}
              searchedRecipes={searchedRecipes}
              addtoMymeals={this.addtoMymeals}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
