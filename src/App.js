import SendEmailVerification from "./Authentication/Other/SendEmailVerification";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Service from "./Pages/Service/Service";
import Home from "./Pages/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import ManageItems from "./Pages/ManageItem/ManageItems";
import AddItems from "./Pages/AddItem/AddItems";
import MyItems from "./Pages/MyItem/MyItems";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Login from "./Authentication/Log/Login";
import RequireAuth from "./Authentication/Other/RequireAuth";
import SignUp from "./Authentication/Signup/Signup";
import Loading from "./Shared/Loading";
import AOS from "aos";
import "aos/dist/aos.css";
import ForgotPassword from "./Authentication/Other/ForgotPassword";
import InventoryUpdate from "./Pages/Inventory/InventoryUpdate";
function App() {
  // use AOS
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [loading, setLoading] = useState();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />

              <Route path="/service" element={<Service />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              {/* Require Auth */}
              <Route path="/inventory" element={<Inventory />} />
              <Route
                path="/inventory_update/:id"
                element={
                  <RequireAuth>
                    <SendEmailVerification>
                      {<InventoryUpdate />}
                    </SendEmailVerification>
                  </RequireAuth>
                }
              ></Route>
              <Route
                path="/manage"
                element={
                  <RequireAuth>
                    <SendEmailVerification>
                      <ManageItems />
                    </SendEmailVerification>
                  </RequireAuth>
                }
              />
              <Route
                path="/add"
                element={
                  <RequireAuth>
                    <SendEmailVerification>
                      <AddItems />
                    </SendEmailVerification>
                  </RequireAuth>
                }
              />
              <Route
                path="/my"
                element={
                  <RequireAuth>
                    <SendEmailVerification>
                      <MyItems />
                    </SendEmailVerification>
                  </RequireAuth>
                }
              />

              {/* Login & Logout */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgot" element={<ForgotPassword />} />
            </Routes>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
