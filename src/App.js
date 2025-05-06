import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

import ExchangeRatesPage from "./components/exchangeratetable";
import NotFound from "./components/notfound";

import About from "./components/about";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/exchange" element={<ExchangeRatesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
