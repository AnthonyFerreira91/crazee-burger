import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/error/ErrorPage";
import LoginPage from "./pages/login/LoginPage";
import OrderPage from "./pages/order/OrderPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="order/:firstname" element={<OrderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
