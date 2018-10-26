import App, { Container } from "next/app";

class MyApp extends App {
  render() {
    const { Compoenent } = this.props;

    return (
      <Container>
        <p>Every page</p>
      </Container>
    );
  }
}

export default MyApp;
