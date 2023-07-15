import Signup from "./components/signup";
import Login from "./components/login";
import UsernameScreen from "./components/usernamescreen";
import Otpscreen from "./components/otpscreen";
import { Routes, Route } from "react-router-dom";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (<Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/username" element={<UsernameScreen />} />
    <Route path="/otp" element={<Otpscreen />} />
  </Routes>);
}
export default App;
