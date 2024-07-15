 import React from "react";
 import ReactDOM from "react-dom/client"
 import { configureStore } from "@reduxjs/toolkit";
 import Cartslice from "./Cartslice";
 const store=configureStore({
 reducer:{
    cart : Cartslice,

 }
 });
 export default store;