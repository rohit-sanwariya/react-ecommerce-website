import { Container } from "react-bootstrap";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeScreens from "./Screens/HomeScreens";
import ProductScreen from "./Screens/ProductScreen";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" exact component={HomeScreens} />
          <Route path="/product/:id" component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
