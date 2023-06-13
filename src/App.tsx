import { BrowserRouter, Routes, Outlet, Route } from "react-router-dom";
import { Dashboard, Login, MovieDetail, Popular, Search, Signup, Upcoming } from "./pages";

function App() {
      return (
            <BrowserRouter>
                  <Routes>
                        <Route path="/" element={<Outlet />}>
                              <Route index element={<Dashboard />} />
                              <Route path="login" element={<Login />} />
                              <Route path="signup" element={<Signup />} />
                              <Route path="movie/:id" element={<MovieDetail />} />
                              <Route path="popular" element={<Popular />} />
                              <Route path="upcoming" element={<Upcoming />} />
                              <Route path="search" element={<Search />} />
                              <Route path="search/:name" element={<Search />} />
                        </Route>
                  </Routes>
            </BrowserRouter>
      );
}

export default App;
