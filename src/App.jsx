import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Outlet,
  HashRouter,
} from "react-router-dom";

import GlobalStyle from "./ui/Font";
import { Container } from "./ui/container";
import Main from "./pages/main/Main";
import Login from "./pages/user/Login";
import SignUp from "./pages/user/Signup";
import AuthProvider, { AuthProtectedRoute, SellerAuthProtectedRoute } from "./security/AuthContext";

import Mypage from "./pages/user/MyPage";
import Me from "./pages/Me";
import CreateReviewPage from "./pages/CreateReviewPage";
import ReviewPage from "./pages/ReviewPage";
import Cart from "./pages/user/Cart";

import SellerPage from "./pages/seller/SellerPage";

import PaymentCompletePage from "./pages/order/PayCompleted";

import ItemOrder from "./pages/order/ItemOrder";
import Category from "./pages/main/Category";
import ItemListPage from "./pages/main/ItemListPage";

import Editpassword from "./pages/EditPassword";

import Search from "./pages/main/Search";
import ItemDetail from "./pages/order/ItemDetail";
import ItemDetailReview from "./pages/order/ItemDetailReview";
import ReviewsList from "./pages/review/ReviewsList";
import CreateOrder from "./components/item/CreateOrder";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Container>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/itemList" element={<ItemListPage />} />
            <Route path="/me" element={<Me />} />
            <Route
              path="/mypage/*"
              element={
                <AuthProtectedRoute>
                  <Mypage />
                </AuthProtectedRoute>
              }
            />
            <Route path="/itemOrder" element={<ItemOrder />} />
            <Route path="/:itemId/details" element={<ItemDetail />} />
            <Route
              path="/:itemId/details/review"
              element={<ItemDetailReview />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/createOrder" element={<CreateOrder />} />

            <Route path="/payCompleted" element={<PaymentCompletePage />} />
            <Route path="/category" element={<Category />} />
            <Route path="/:category/:subCategory" element={<ItemListPage />} />
            <Route path="/search" element={<Search />} />
            <Route path="/seller/*" element={
              <SellerAuthProtectedRoute>
                <SellerPage />
              </SellerAuthProtectedRoute>}
            />

            {/* <Route path="/orderPayList" element={<OrderPayListPage />} /> */}

            <Route path="/review" element={<ReviewPage />} />
            <Route path="/createreview" element={<CreateReviewPage />} />

            <Route path="/editpassword" element={<Editpassword />} />

            <Route path="/kakaoPay/approve" element={<PaymentCompletePage />} />
            <Route path="/reviewslist" element={<ReviewsList />} />

          </Routes>
        </Container>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
