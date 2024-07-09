import { BrowserRouter, Routes, Route, Outlet, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import { Container } from "./ui/container";
import FooterNav from "./components/FooterNav";
import ItemDetail from "./pages/ItemDetail";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details" element={<ItemDetail />} />
          <Route path="/main" element={<Main />} />
        </Routes>
        <FooterNav />
      </Container>
    </BrowserRouter>
  );
}

export default App;
