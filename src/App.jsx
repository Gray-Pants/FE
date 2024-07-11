import {
  BrowserRouter,
  Router, 
  Routes,
  Route,
  Outlet,
  HashRouter,
} from "react-router-dom";
import Home from "./pages/Home";
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

import MyPage from "./pages/MyPage";
import EditMemberInfo from "./components/EditMemberInfo";
import EditPassword from "./pages/EditPassword";
import LikeList from "./pages/LikeList";
import ReviewPage from "./pages/Review";
import CreateReviewPage from "./pages/CreateReview";
import ReviewsListPage from "./pages/ReviewsList";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Main />} />
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
           
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/editmemberinfo" element={<EditMemberInfo />} />
            <Route path="/editpassword" element={<EditPassword />} /> 
            <Route path="/likelist" element={<LikeList />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/createreview" element={<CreateReviewPage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
