import { createContext } from "react";
export const Form=createContext("")
export const FormProvider=({childComp})=>{
const [localDB,setDB]=useState([])
return(
    <MyContext.Provider
     value={{localDB,setDB}}>
        {childComp}
    </MyContext.Provider>
)
}
