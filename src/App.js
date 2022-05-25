import { Route, Routes } from "react-router-dom";
import RequireAuth from "./Components/RequireAuth";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import Purchase from "./Pages/Purchase/Purchase";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import SignUp from "./Pages/SignUp/SignUp";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
