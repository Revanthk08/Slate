import Signup from "./components/signup";
import Login from "./components/login";

import { Routes, Route } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route path="login" component={<Login />} />
        <Route path="signup" component={<Signup />} />
      </Route>
    </Routes>
  </BrowserRouter>;
}
export default App;
