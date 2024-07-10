import { BrowserRouter, Routes, Route, Outlet, HashRouter } from "react-router-dom";
import { Container } from "./ui/container";
import ItemDetail from "./pages/ItemDetail";
import Main from "./pages/Main";
import ItemOrder from "./pages/ItemOrder";
import PayCompleted from "./pages/PayCompleted";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details" element={<ItemDetail />} />
          <Route path="/itemOrder" element={<ItemOrder/>} />
          <Route path="/payCompleted" element={<PayCompleted/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
