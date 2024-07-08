import { Mycontext } from "./MyContext";
import Mycomponent from "./MyComponent";
import { useState } from "react";
//consumer
export default function Example(){
    const[text,setText]=useState("");
    return(
        <div>
            <Mycontext.Provider value={{text,setText}}>
                <Mycomponent/>
            </Mycontext.Provider>

        </div>
    )
}
