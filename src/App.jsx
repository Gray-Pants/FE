import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import FooterNav from "./components/FooterNav";
import ItemDetail from "./pages/ItemDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<ItemDetail />} />
          {/* <Route path="/list" element={<List />} />
          <Route path="/search" element={<Search />} />
          <Route path="/mypage" element={<MyPage />} /> */}
        </Routes>
        <FooterNav />
      </BrowserRouter>
    </>
  );
}

export default App;
