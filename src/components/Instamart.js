import React, { useState } from "react";
import ReactDOM from "react-dom";
const Section=({title,description,isVisible,setisvisible})=>{
    
    return (
        <div className=" ">
        <div className="p-2 m-4 bg-yellow-50 rounded-lg shadow-lg ">
            <h3 className="font-semibold text-lg text-orange-400 ">{title}</h3>
            {
             isVisible?(
                <button onClick={()=>setisvisible(false)} className="cursor-pointer font-thin">Hide</button>
             ):(
                <button onClick={()=>setisvisible(true)} className="cursor-pointer font-thin">Show</button>
             )

            }                      
            {isVisible &&  <p>{description}</p>}           
        </div>
        </div>
        
    )
}
const Instamart=()=>{
    // const[setionCofig,setsectionConfig]=useState({
    //     showAbout: false,
    //     showTeam:false,
    //     showcarrer:false,
    // });
    const[visiblesection,setisvisiblesection]=useState("");
    return (
        <div className="m-0 ">
          <h1>here</h1>
          <div className="my-20">
            <h1 className="font-bold text-3xl p-2 m-2  text-center">Instamart</h1>
            <Section title={"About Instamart"}
            description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum The Extremes of Good and Evil by Cicero Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, " }
            isVisible={visiblesection==="about"}
            setisvisible={()=>
                {
                  visiblesection!="about"?(
                    setisvisiblesection("about")
                  ):(
                    setisvisiblesection("")
                  )  
                }
            }
            
            />

        <Section title={"Team Instamart"}
            description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum The Extremes of Good and Evil by Cicero Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum The Extremes of Good and Evil by Cicero"}
            isVisible={visiblesection==="team"}
            setisvisible={()=>
            {
              visiblesection!="team"?(
                setisvisiblesection("team")
              ):(
                setisvisiblesection("")
              )  
            }
               
            
 
             }/>
            <Section title={" Instamart"}
            description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum The Extremes of Good and Evil by Cicero"}
            isVisible={visiblesection==="carrers"}
            setisvisible={()=>
                {
                  visiblesection!="carrers"?(
                    setisvisiblesection("carrers")
                  ):(
                    setisvisiblesection("")
                  )  
                }
            }
            />

           {/* <AboutInstamart/>
           <Detailsofinstamart/>
           <Teaminstamart/>
           <Product/>
           <Carers/> */}

        </div>
        </div>

    )
}
export default Instamart;