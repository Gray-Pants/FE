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
import SignUp from "./pages/seller/Signup";
import AuthProvider, { AuthProtectedRoute } from "./security/AuthContext";
import Cart from "./pages/user/Cart";
import PaymentCompletePage from "./pages/order/PayCompleted";
import Me from "./pages/Me";

import Category from "./pages/main/Category";
import GlobalStyle from "./ui/Font";
import Search from "./pages/order/Search";
import SellerJoin from "./pages/seller/SellerJoin";
import SellerPage from "./pages/seller/Seller";

import MyPage from "./pages/user/MyPage";
import EditMemberInfo from "./components/user/EditMemberInfo";
import EditPassword from "./pages/user/EditPassword";
import LikeList from "./pages/user/LikeList";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
            <Route path="/mypage" element={
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
          <Route path="/editmemberinfo" element={<EditMemberInfo />} />
          <Route path="/editpassword" element={<EditPassword />} /> 
          <Route path="/likelist" element={<LikeList />} /> 
        </Routes>
        
      </Container>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;