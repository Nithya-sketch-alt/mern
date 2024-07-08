import { createContext,useState } from "react";
import  MyProvider from "./MyProvider";
export const MyContext=createContext();
export const FormProvider=({childComp})=>{
const [localDB,setDB]=useState([])
return(
    <MyContext.Provider value={{localDB,setDB}}>
    {childComp}
    </MyContext.Provider>
)
}
