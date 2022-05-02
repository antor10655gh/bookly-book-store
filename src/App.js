import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import MainInvoices from "./Pages/MainInvoices/MainInvoices";
import Footer from "./components/Footer/Footer";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import UpdateInvoice from "./Pages/UpdateInvoice/UpdateInvoice";
import AddItem from "./Pages/AddItem/AddItem";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/inventory"
          element={<MainInvoices></MainInvoices>}
        ></Route>
        <Route
          path="/inventory/:inventoryId"
          element={
            <RequireAuth>
              <UpdateInvoice></UpdateInvoice>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/additem"
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blog-1"></Route>
        <Route path="/blog-2"></Route>
        <Route path="/blog-3"></Route>
        <Route path="/blog-4"></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
