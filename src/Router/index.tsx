import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignupForm from "../Pages/Signup/Signup";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
  );
}
