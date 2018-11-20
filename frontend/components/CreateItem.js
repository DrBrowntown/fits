import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";
import formatMoney from "../lib/formatMoney";

class CreateItem extends Component {
  render() {
    return (
      <Form>
        <fieldset>
          <label htmlFor="title">
            title
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              required
            />
          </label>
        </fieldset>
      </Form>
    );
  }
}

export default CreateItem;
