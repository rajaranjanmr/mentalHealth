import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { Home, OnlineTherapyConsultation } from "./pages";

const App = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/online-therapy-consultation/:id"
          element={<OnlineTherapyConsultation />}
        />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
