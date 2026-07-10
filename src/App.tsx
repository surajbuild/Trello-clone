import { BrowserRouter, Routes, Route } from "react-router";
import Auth from "./screens/Auth";
import Dashboard from "./screens/Dashboard";
import Board from "./screens/Board";

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
export default function App() {
    return (
        <div>
            <DndProvider backend={HTML5Backend}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/signin" element={<Auth />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/board/:id" element={<Board />} />
                    </Routes>
                </BrowserRouter>
            </DndProvider>
        </div>
    )
}
