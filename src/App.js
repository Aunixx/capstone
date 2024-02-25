import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/AlertContext";
import Alert from "./components/Alert";
import ReservationPage from "./components/ReservationPage/ReservationPage";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <div className="container">
          <Header />
          <Main />
          <Footer />
        </div>
        <Alert />
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
