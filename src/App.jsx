import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import UserContext from "./context/UserContext"
import NotFound from "./pages/NotFound"


function App() {

  return (
    <BrowserRouter>
      <UserContext>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </UserContext>
    </BrowserRouter>
  )
}

export default App;
