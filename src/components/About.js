import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClassComponent from "./ProfileClass";
const About2 = () => {
  return (
    <>
      <h1>This is about us page</h1>
      {/* <Outlet></Outlet> */}
        <ProfileClassComponent name={"Bhuki maa"} />
    </>
  );
};



class About extends React.Component{
  constructor(props){
    super(props);
    console.log("Parent-constructor");
}
componentDidMount(){
  console.log("Parent-Mount")
}
  render(){
    return (
      <>
        {console.log("Parent-render")}
        <h1>This is about us page</h1>
          <ProfileClassComponent name={"Bhuki maa"} />
      </>
    );
  }
}
export default About;