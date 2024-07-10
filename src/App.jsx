import { BrowserRouter, Routes, Route, Outlet, HashRouter } from "react-router-dom";
import { Container } from "./ui/container";
import ItemDetail from "./pages/ItemDetail";
import Main from "./pages/Main";
import ItemOrder from "./pages/ItemOrder";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import AuthProvider from "./security/AuthContext";
import PayCompleted from "./pages/PayCompleted";
import SellerJoin from "./pages/SellerJoin";
import SellerPage from "./pages/Seller";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/itemOrder" element={<ItemOrder/>} />
            <Route path="/payCompleted" element={<PayCompleted/>}/>
            <Route path="/details" element={<ItemDetail />} />
            <Route path="/itemOrder" element={<ItemOrder/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/sellerJoin" element={<SellerJoin/>}/>
            <Route path="/seller" element={<SellerPage/>}/>
          </Routes>
        </Container>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
