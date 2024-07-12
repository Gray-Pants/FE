import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Outlet,
  HashRouter,
} from "react-router-dom";
import { Container } from "./ui/container";
import ItemDetail from "./pages/order/ItemDetail";
import Main from "./pages/main/Main";
import ItemOrder from "./pages/order/ItemOrder";
import Login from "./pages/user/Login";
import SignUp from "./pages/user/Signup";
import AuthProvider, { AuthProtectedRoute } from "./security/AuthContext";
import Cart from "./pages/user/Cart";
import PaymentCompletePage from "./pages/order/PayCompleted";

import Mypage from "./pages/user/MyPage";
import Me from "./pages/Me";
import ReviewPage from "./pages/ReviewPage";
import CreateReviewPage from "./pages/CreateReviewPage";
import Category from "./pages/main/Category";
import GlobalStyle from "./ui/Font";
import Search from "./pages/order/Search";
import SellerItemAdd from "./pages/seller/SellerItemAdd";
import SellerPage from "./pages/seller/Seller";
import SellerLoginPage from "./pages/seller/Sellerlogin";
import SellerProductListPage from "./pages/seller/SellerProductList";
import SellerProductDetailsPage from "./pages/seller/SellerDetails";
import SellerSalesListPage from "./pages/seller/SellerProductSalesDetails";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Container>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/me" element={<Me />} />
            <Route
              path="/mypage"
              element={
                <AuthProtectedRoute>
                  <MyPage />
                </AuthProtectedRoute>
              }
            />
            <Route path="/itemOrder" element={<ItemOrder />} />
            <Route path="/details" element={<ItemDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payCompleted" element={<PaymentCompletePage />} />
            <Route path="/category" element={<Category />} />
            <Route path="/search" element={<Search />} />
            <Route path="/sellerJoin" element={<SellerJoin />} />
            <Route path="/seller" element={<SellerPage />} />
            <Route path="/editmemberinfo" element={<EditMemberInfo />} />
            <Route path="/editpassword" element={<EditPassword />} />
            <Route path="/likelist" element={<LikeList />} />
            <Route path="/sellerItemAdd" element={<SellerItemAdd />} />
            <Route path="/sellerLogin" element={<SellerLoginPage />} />
            <Route
              path="/sellerProductList"
              element={<SellerProductListPage />}
            />
            <Route
              path="/sellerProductDetails"
              element={<SellerProductDetailsPage />}
            />
            <Route
              path="/sellerProductSalesDetails"
              element={<SellerSalesListPage />}
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
