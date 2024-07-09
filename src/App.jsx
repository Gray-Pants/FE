import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import { Container } from "./ui/container";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import FooterNav from "./components/FooterNav";
import ItemDetail from "./pages/ItemDetail";
import Main from "./pages/Main";
import ItemOrder from "./pages/ItemOrder";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details" element={<ItemDetail />} />
          <Route path="/itemOrder" element={<ItemOrder/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
