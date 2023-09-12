 import React from "react";
 import ReactDOM from "react-dom/client";
//  import "./style.css";


const root=ReactDOM.createRoot(document.getElementById("root"));


const title = (
    <h1 id="title">Logo</h1>
)


const Header= () => {
    return (
        <div className="header">
            {title}
            <ul className="nav-list">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Card</li>
            </ul>
        </div>
    )
};

const BurgerKing={
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    name:"Burger King",
    cusines:["American", "Burgers"],
    ratings:"4.2",
}
const RestrauntCard= () => {
    return (
        <div className="card">
            <img src={BurgerKing.image}/>
            <h2>{BurgerKing.name}</h2>
            <h3>{BurgerKing.cusines.join(", ")}</h3>
            <h4>{BurgerKing.ratings}</h4>
        </div>
    )
}
const Body= () => {
    return(
        <div>
            <RestrauntCard />
        </div>
    )
}

const Footer= () => {
    return(
        <div>
            footer
        </div>
    )
}
const AppLayout= () => {
    return (
    <>
        <Header />
        <Body />
        <Footer />
    </>
    )
}

root.render(<AppLayout/>);  