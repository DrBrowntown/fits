import App, { Container } from "next/app";
import { Component } from "react";

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <p>Every page</p>
        <Component />
      </Container>
    );
  }
}

export default MyApp;
