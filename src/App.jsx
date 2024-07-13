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
import AuthProvider,  {AuthProtectedRoute } from "./security/AuthContext";

import Mypage from "./pages/user/MyPage";
import Me from "./pages/Me";
import CreateReviewPage from "./pages/CreateReviewPage";
import ReviewPage from "./pages/ReviewPage";
import Cart from "./pages/user/Cart";

import SellerItemAdd from "./pages/seller/SellerItemAdd";
import SellerPage from "./pages/seller/Seller";
import SellerLoginPage from "./pages/seller/Sellerlogin";
import SellerProductListPage from "./pages/seller/SellerProductList";
import SellerProductDetailsPage from "./pages/seller/SellerDetails";
import SellerSalesListPage from './pages/seller/SellerProductSalesDetails';

import PaymentCompletePage from "./pages/order/PayCompleted";


import ItemOrder from "./pages/order/ItemOrder";
import Category from "./pages/main/Category";
import ItemListPage from "./pages/main/ItemListPage";
import Search from "./pages/main/Search";
import SearchItemListPage from "./pages/main/SearchItemListPage";
import ItemDetail from "./pages/order/ItemDetail";
import ReviewsList from "./pages/review/ReviewsList";

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
            <Route path="/mypage/*" element={
              <AuthProtectedRoute>
               <Mypage />
              </AuthProtectedRoute>
              } />
          <Route path="/itemOrder" element={<ItemOrder />} />
          <Route path="/details" element={<ItemDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payCompleted" element={<PaymentCompletePage/>}/>
          <Route path="/category" element={<Category />} />
          <Route path="/:category/:subCategory" element={<ItemListPage />} />
          <Route path="/search" element={<Search/>} />
          <Route path="/sellerItemAdd" element={<SellerItemAdd />}/>
          <Route path="/seller" element={<SellerPage/>}/>
          <Route path="/sellerLogin" element={<SellerLoginPage/>}/>
          <Route path="/sellerProductList" element={<SellerProductListPage/>}/>
          <Route path="/sellerProductDetails" element={<SellerProductDetailsPage/>}/>
          <Route path="/sellerProductSalesDetails" element={<SellerSalesListPage/>}/>
          <Route path="/searchItemList" element={<SearchItemListPage />} />

          <Route path="/review" element={<ReviewPage />} />
          <Route path="/createreview" element={<CreateReviewPage />} />
          <Route path="/reviewslist" element={<ReviewsList />} />
        </Routes>
        
      </Container>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
