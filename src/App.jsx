import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  HashRouter,
} from "react-router-dom";
import { Container } from "./ui/container";
import ItemDetail from "./pages/ItemDetail";
import Main from "./pages/Main";
import ItemOrder from "./pages/ItemOrder";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import AuthProvider from "./security/AuthContext";
import Cart from "./pages/Cart";
import PaymentCompletePage from "./pages/PayCompleted";
import Category from "./pages/Category";
import GlobalStyle from "./ui/Font";
import Search from "./pages/Search";
import SellerJoin from "./pages/SellerJoin";
import SellerPage from "./pages/Seller";
import SellerProductPage from "./pages/SellerProduct";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Container>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/itemOrder" element={<ItemOrder />} />
            <Route path="/details" element={<ItemDetail />} />
            <Route path="/itemOrder" element={<ItemOrder />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payCompleted" element={<PaymentCompletePage/>}/>
            <Route path="/category" element={<Category/>} />
            <Route path="/search" element={<Search/>} />
            <Route path="/sellerJoin" element={<SellerJoin/>}/>
            <Route path="/seller" element={<SellerPage/>}/>
            <Route path="/sellerProduct" element={<SellerProductPage/>}/>
          </Routes>
        </Container>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;