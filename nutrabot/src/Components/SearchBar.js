import React from "react";
import Search from "../Assets/icon-search.png";
import { Form, FormControl, Button } from 'react-bootstrap';
import "./SearchBar.css";

function Searchbar(props) {
  const { input, handleInput, handleSubmit, invalidInput } = props;
  return (
    <div>
      <Form onSubmit={handleSubmit} className="d-flex">
        <FormControl
          type="search"
          placeholder="Search food"
          value={input}
          onChange={handleInput}
          className="mr-2"
          aria-label="Search"
        />
        <Button type="submit" variant="outline-primary">Search</Button>
      </Form>
      {invalidInput && "Please enter valid input"}
    </div>
  );
}

export default Searchbar;
