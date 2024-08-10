import { Routes, Route } from "react-router-dom";
import ErrorPage from "./components/pages/errorPage/ErrorPage";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import OrderPage from "./components/pages/orderPage/OrderPage";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="order/:firstname" element={<OrderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
