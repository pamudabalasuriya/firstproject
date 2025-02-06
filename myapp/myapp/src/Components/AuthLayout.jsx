import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Protected ({ children }) {
    const authStatus = useSelector((state) => state.auth.status);

    const navigate = useNavigate();
    const [loader, setLoder] = useState(true);
    useEffect(()=> {
        if(!authStatus) {
            navigate("/Login")
        } else {
        }
        setLoder(false);
    }, [authStatus, navigate])
    return loader ? <div>Loading...</div> : <>{children}</>
}

export default Protected;