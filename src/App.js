import { Routes, Route } from "react-router-dom";
//import Registration from "./pages/Registration";
//import Login from "./pages/Login";
//import ForgotPassword from "./pages/ForgotPassword";
//import ProtectedRoutes from "./routes/ProtectedRoutes";
import Home from "./pages/Home";

function App() {
    return (
        <Routes>
            {/*<Route 
                path="/" 
                element={
                    <ProtectedRoutes>
                        <Home />
                    </ProtectedRoutes>
                } 
            />*/}
            <Route path="/" element={<Home /> } />
            {/*<Route path="/register/" element={<Registration />} />
            <Route path="/login/" element={<Login />} />
            <Route path="/forgot-password/" element={<ForgotPassword />} />*/}
        </Routes>
    );
}

export default App;
