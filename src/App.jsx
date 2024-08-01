import { BrowserRouter, Route, Routes } from "react-router-dom"

import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import SignOut from "./pages/SignOut"
import About from "./pages/About"
import Profile from "./pages/Profile"

export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-out" element={<SignOut />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />


      </Routes>
    
    </BrowserRouter>
  )
}
