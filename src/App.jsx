import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import { Container } from "./ui/container";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import FooterNav from "./components/FooterNav";
import ItemDetail from "./pages/ItemDetail";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<ItemDetail />} />
        </Routes>
        <FooterNav />
      </Container>
    </BrowserRouter>
  );
}

export default App;
