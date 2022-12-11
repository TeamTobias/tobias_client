import {BrowserRouter, Routes, Route} from "react-router-dom";
import JoinClient from "./Join/JoinClient";
import JoinSeller from "./Join/JoinSeller";
import LoginClient from "./Login/LoginClient";
import LoginManager from "./Login/LoginManager";
import LoginSeller from "./Login/LoginSeller";
import SelectUser from "./Home/SelectUser"
import MenuClient from "./MenuClient";
import MenuSeller from "./MenuSeller";
import MenuManager from "./MenuManager";
import BasketMenu from "./BasketMenu";
import ReviewMenu from "./ReviewMenu";
import RecentViewMenu from "./RecentViewMenu";
import CouponMenu from "./Coupon/CouponMenu";
import PromotionCouponMenu from "./PromotionCouponMenu";
import GetAllManangerPage from "./GetAllManagerPage";
import SearchProduct from "./Product/SearchProduct";
import SearchSaleProduct from "./Product/SearchSaleProduct";
import BrandCouponMenu from "./Coupon/BrandCouponMenu";
import GetAllClientPage from "./GetAllClientPage";
import GetAllSellerPage from "./GetAllSellerPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectUser/>}/>
        <Route path="/loginClient" element={<LoginClient/>}/>
        <Route path="/loginSeller" element={<LoginSeller/>}/>
        <Route path="/loginManager" element={<LoginManager/>}/>
        <Route path="/joinClient" element={<JoinClient/>}/>
        <Route path="/joinSeller" element={<JoinSeller/>}/>
        <Route path="/menuClient" element={<MenuClient/>}/>
        <Route path="/menuSeller" element={<MenuSeller/>}/>
        <Route path="/menuManager" element={<MenuManager/>}/>
        <Route path="/basketMenu" element={<BasketMenu/>}/>
        <Route path="/reviewMenu" element={<ReviewMenu/>}/>
        <Route path="/recentViewMenu" element={<RecentViewMenu/>}/>
        <Route path="/couponMenu" element={<CouponMenu/>}/>
        <Route path="/promotionCouponMenu" element={<PromotionCouponMenu/>}/>
        <Route path="/getAllManagerPage" element={<GetAllManangerPage/>}/>
        <Route path="/searchProduct" element={<SearchProduct/>}/>
        <Route path="/searchSaleProduct" element={<SearchSaleProduct/>}/>
        <Route path="/brandCouponMenu" element={<BrandCouponMenu/>}/>
        <Route path="/getAllClientPage" element={<GetAllClientPage/>}/>
        <Route path=".getAllSellerPage" element={<GetAllSellerPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
