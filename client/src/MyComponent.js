import { Mycontext } from "./MyContext";
import { useContext } from "react";
export default function Mycomponent(){
    //provider
    const{text,setText}=useContext(Mycontext)
return(
    <div>
        <h1>{text}</h1>
        <button onClick={()=>setText("Hello world")}>Cilck</button>

    </div>
)
}