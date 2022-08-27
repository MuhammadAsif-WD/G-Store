// Dark Mode
import React, { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, duration, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
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
import SignUp from "./Authentication/Signup/Signup";
import Loading from "./Shared/Loading";
import RequireAuth from "./Authentication/Log/RequireAuth";
import AOS from "aos";
import "aos/dist/aos.css";
import SendEmailVerification from "./Authentication/SendEmailVerification/SendEmailVerification";
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
    }, 0.5);
  }, []);

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />

              <Route path="/service" element={<Service />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              {/* Require Auth */}
              <Route
                path="/inventory/:id"
                element={
                  <RequireAuth>
                    <SendEmailVerification>
                      {<Inventory />}
                    </SendEmailVerification>
                  </RequireAuth>
                }
              ></Route>
              <Route
                path="/manage"
                element={
                  <RequireAuth>
                    <ManageItems />
                  </RequireAuth>
                }
              />
              <Route
                path="/add"
                element={
                  <RequireAuth>
                    <AddItems />
                  </RequireAuth>
                }
              />
              <Route
                path="/my"
                element={
                  <RequireAuth>
                    <MyItems />
                  </RequireAuth>
                }
              />

              {/* Login & Logout */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </div>
          <Footer />
        </ThemeProvider>
      )}
    </div>
  );
}

export default App;
