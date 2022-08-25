// Dark Mode
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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

function App() {
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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/manage" element={<ManageItems />} />
            <Route path="/add" element={<AddItems />} />
            <Route path="/my" element={<MyItems />} />
            <Route path="/service" element={<Service />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />

            {/* Login & Logout */}
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
