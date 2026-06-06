import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Admin from "./pages/Admin";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    // wraps the entire application to enable client-side routing
    <BrowserRouter>
      {/* persistent navigation bar shown on all pages */}
      <Navbar />
      {/* defines all application routes */}
      <Routes>
         {/* home page route */}
        <Route path="/" element={<Home />} />
         {/* shop page showing all products */}
        <Route path="/shop" element={<Shop />} />
         {/* admin dashboard for editing and deleting products */}
        <Route path="/admin" element={<Admin />} />
          {/* page for adding new products */}
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;