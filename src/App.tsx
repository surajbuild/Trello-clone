import { BrowserRouter, Routes, Route } from "react-router";

import Auth from "./screens/Auth";
import Dashboard from "./screens/Dashboard";
import Board from "./screens/Board";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Auth />} />
          <Route path="/signin" element={<Dashboard />} />
          <Route path="/signin" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
