import React from "react";
import ReactDOM from "react-dom/client";
import { useState,useEffect } from "react";

const useOnline=()=>{
    const [isOnline,setOnline]=useState(true);
    const handleonline =()=>{
        setOnline(false);
    }
    const handleoffline =()=>{
        setOnline(true);
    }
    useEffect(()=>{
        window.addEventListener("online",handleonline);
        window.addEventListener("offline",handleoffline);
    },[]);
    return ()=>{
        window.removeEventListener("online",handleonline);
        window.removeEventListener("offline",handleoffline);
    }
    return isOnline;
}
export default useOnline;