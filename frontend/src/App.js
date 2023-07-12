import "./App.css";
import Signup from "./components/signup";
import Login from "./components/login";

import { Routes , Route } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (<Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
  </Routes>);
}
export default App;
