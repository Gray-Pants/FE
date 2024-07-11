import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  HashRouter,
} from "react-router-dom";
import Home from "./pages/main/Home";
import { Container } from "./ui/container";
import ItemDetail from "./pages/order/ItemDetail";
import Main from "./pages/main/Main";
import ItemOrder from "./pages/order/ItemOrder";
import Login from "./pages/user/Login";
import SignUp from "./pages/user/Signup";
import AuthProvider, { AuthProtectedRoute } from "./security/AuthContext";
import Cart from "./pages/user/Cart";
import PaymentCompletePage from "./pages/order/PayCompleted";
import Me from "./pages/Me";

import Category from "./pages/main/Category";
import GlobalStyle from "./ui/Font";
import Search from "./pages/order/Search";
import SellerJoin from "./pages/seller/SellerJoin";
import SellerPage from "./pages/seller/Seller";
import SellerLoginPage from "./pages/seller/Sellerlogin";
import SellerProductListPage from "./pages/seller/SellerProductList";
import SellerProductDetailsPage from "./pages/seller/SellerDetails";
import SellerSalesListPage from './pages/seller/SellerProductSalesDetails';

import MyPage from "./pages/user/MyPage";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
            <Route path="/mypage/*" element={
              <AuthProtectedRoute>
               <MyPage />
              </AuthProtectedRoute>
              } />
          <Route path="/itemOrder" element={<ItemOrder />} />
          <Route path="/details" element={<ItemDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payCompleted" element={<PaymentCompletePage/>}/>
          <Route path="/category" element={<Category/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/sellerJoin" element={<SellerJoin/>}/>
          <Route path="/seller" element={<SellerPage/>}/>
          <Route path="/sellerLogin" element={<SellerLoginPage/>}/>
          <Route path="/sellerProductList" element={<SellerProductListPage/>}/>
          <Route path="/sellerProductDetails" element={<SellerProductDetailsPage/>}/>
          <Route path="/sellerProductSalesDetails" element={<SellerSalesListPage/>}/>
        </Routes>
        
      </Container>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;