import "./App.css";
import Login from "./components/Login";
import Report from "./components/Report";
import User from "./components/User";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InfoUser from "./components/User/InfoUser";
import InfoLomo from "./components/Lomo/InfoLomo";
import Lomo from "./components/Lomo";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="report" element={<Report />} />
          <Route path="lomo" element={<Lomo />} />
          <Route path="lomo/:lomoid" element={<InfoLomo />} />
          <Route path="user" element={<User />} />
          <Route path="user/:userid" element={<InfoUser />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
