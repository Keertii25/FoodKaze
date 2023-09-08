 import React from "react";
 import ReactDOM from "react-dom/client";


 const root2=ReactDOM.createRoot(document.getElementById("root2"));
const Heading1 = () =>{
   return <h1>This is a react element</h1>
}


const x=10;
const Heading2 = () => {
    return (
        <div>
            {/* component compositon */}
            <Heading1/>
            <h2>This is a {"namuuuu"} react component</h2>
            <h3>This is also a react component</h3>
            {x}
           {console.log("naman")}
        </div>
    )
};

root2.render(<Heading2/>);  