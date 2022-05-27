import { Route, Routes } from "react-router-dom";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import Purchase from "./Pages/Purchase/Purchase";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import SignUp from "./Pages/SignUp/SignUp";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from "./Pages/Dashboard/DashBoard";
import MyProfile from "./Pages/Dashboard/Components/MyProfile";
import MyOrders from "./Pages/Dashboard/Components/MyOrders";
import Review from "./Pages/Dashboard/Components/Review";
import Users from "./Pages/Dashboard/Components/Users";
import RequireAuth from "./Components/hooks/RequireAuth";
import RequireAdmin from "./Components/hooks/RequireAdmin";
import AddProduct from "./Pages/Dashboard/Components/AddProduct";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/portfolio" element={<MyPortfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product/:productId" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
        <Route path="/dashboard" element={
          <RequireAuth>
            <DashBoard />
          </RequireAuth>
        } >
          <Route index element={<MyProfile />} />
          <Route path="orders" element={<MyOrders />} />
          <Route path="review" element={<Review />} />
          <Route path="users" element={<RequireAdmin><Users /></RequireAdmin>} />
          <Route path="add_product" element={<RequireAdmin><AddProduct /></RequireAdmin>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
