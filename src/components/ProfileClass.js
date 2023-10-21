import React from "react";
class ProfileClass extends React.Component{
    render(){
        return(
            <>
                <h1>This is my first class based component</h1>
                <h1>name: {this.props.name}</h1>
            </>
        )
    }
}
export default ProfileClass;