import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPages from "./pages/MainPages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
