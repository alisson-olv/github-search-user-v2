import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import UserContext from "./context/UserContext"

function App() {

  return (
    <BrowserRouter>
      <UserContext>
        <Routes>
          <Route path="/github-search-user-v2" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </UserContext>
    </BrowserRouter>
  )
}

export default App;
