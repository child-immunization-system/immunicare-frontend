import axios from "axios";
import { useNavigate } from "react-router-dom";

function useUserActions () {
    const navigate = useNavigate();
    const baseURL = "http://localhost:8000";
    return {
        login,
        register,
        logout,
    };
}

// Login the user
function login(data) {
    return axios.post(`${baseURL}/api/v1/auth/login`, 
    data).then ((res) => {
        setUserData(data);
        navigate("/");
    });
}
