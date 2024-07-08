import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from './pages/Login'
import SignUp from './pages/Signup'
import FooterNav from "./components/FooterNav";
import ItemDetail from "./pages/ItemDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<ItemDetail />} />
          {/* <Route path="/list" element={<List />} />
          <Route path="/search" element={<Search />} />
          <Route path="/mypage" element={<MyPage />} /> */}
        </Routes>
        <FooterNav />
      </Container>
    </BrowserRouter>
  );
}

export default App;
