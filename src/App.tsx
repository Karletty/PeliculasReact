import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Layout } from "./layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Outlet /></Layout>}>
            <Route index element={<>Home</>} />
            <Route path="upcoming" element={<>Upcoming</>} />
            <Route path="popular" element={<>Popular</>} />
            <Route path="search" element={<>Search</>} />
            <Route path="login" element={<>Login</>} />
            <Route path="signup" element={<>Signup</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
