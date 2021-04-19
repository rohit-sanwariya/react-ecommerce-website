import { Container } from "react-bootstrap";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeScreens from "./Screens/HomeScreens";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
      <Container>
           <HomeScreens/>
            </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
