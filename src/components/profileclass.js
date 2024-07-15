import React from "react";
import { render } from "react-dom";
class Profile extends React.Component{
    constructor(props){
        super(props);
        //Create state 
        this.state={
            userINfo:{
                name:"Dummy name",
                Location:"Dummy Location"

            }
        }
        console.log("child-construtor");
    }
    // api call in the api did mount
   async componentDidMount(){
    const data= await fetch("https://api.github.com/users/Keertii25");
        const json= await data.json();
        console.log(json);
        this.setState(
            {
                userINfo:json,

            }
        );
        console.log("child-ComponentDidMount");
    }
    render(){
        const {count} =this.state;
        console.log("child-render");
        return (
            <div>
            <h1>Profile class component</h1>
            <img src={this.state.userINfo.avatar_url}/>
            <h2>Name:{this.state.userINfo.name}</h2>
            <h2>Location: {this.state.userINfo.location}</h2>
           
            </div>
        )

    }   
}
// render phase
// parent constructor
// parent render 
// child constructor
// child render

// commit phase
// parent componentDid Mount
// DOm is updated
// json is logged in console
// child componentDidMount
// child render(setstate because of it it will be render updating cycle)


export default Profile;