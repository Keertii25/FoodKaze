import React, { useEffect, useState } from "react";

const Profile =(props)=>{
    const [count,setcount]=useState(0);
    const [count2]=useState(0);
    useEffect(()=>{
        console.log("useEffect");
        return ()=>{
            console.log("useeffect return");
        }
    },[]);
   
    return (
        <div>
            <h1>profile components</h1>
            <h3>Name:{props.name}</h3>
            <h3>Count: {count} </h3>
            <button onClick={()=>setcount(1)}></button>
        </div>
    )
}
export default Profile;