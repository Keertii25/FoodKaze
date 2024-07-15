import React from "react";
import ReactDOM from "react-dom/client";
import Profile from "./profileclass";
import ProfileClassComponent from "./profle";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component{
    constructor(props){
        super(props);
        
        console.log("Parent-construtor");
    }
     componentDidMount(){
        
        console.log("Parent-componentdidmount");
    }
    render(){
        console.log("parent-render");
        return(
            <div>
                <h1>About us page</h1>
                <UserContext.Consumer>
                    {({user})=>(
                        <h4>{user.name}-{user.email}</h4>
                    )}
                </UserContext.Consumer>
                <p>This is the namaste react</p>
                {/* <ProfileClassComponent  name={"Akshay"}/> */}
               <Profile name={"AkshayClass"}/>

            </div>
        )
    }
    
}
export default About;