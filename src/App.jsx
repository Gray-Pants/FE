import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import { Container } from "./ui/container";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import FooterNav from "./components/FooterNav";
import ItemDetail from "./pages/ItemDetail";
import MyPage from "./pages/MyPage";
import EditMemberInfo from "./components/EditMemberInfo";
import Main from "./pages/Main";
import EditPassword from "./pages/EditPassword";
import LikeList from "./pages/LikeList";
function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details" element={<ItemDetail />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/editmemberinfo" element={<EditMemberInfo />} />
          <Route path="/editpassword" element={<EditPassword />} /> 
          <Route path="/likelist" element={<LikeList />} /> 
        </Routes>
        <FooterNav />
      </Container>
    </BrowserRouter>
  );
}

export default App;
