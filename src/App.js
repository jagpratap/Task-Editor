import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home"
import TaskList from "./pages/TaskList";
import UserProvider from "./context/UserContext";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="tasklist" element={<TaskList />} />
            <Route path=":taskId" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App