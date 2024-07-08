import {useState} from "react"
export default function TodoList(){
    const [formData,SubmitFormData]=useState({
        email:"",
        time:"",
        date:"",
        note:""

    })
    const[TableData,SubmitTable]=useState([])
    function HandleForm(e){
        const{name,value}=e.target
        SubmitFormData({...formData,[name]:value});

    }
    function HandleSubmit(){
        SubmitTable([...TableData,formData]);
        SubmitFormData({
            email:"",
            time:"",
            date:"",
            note:"",})
    }
    return(
        <div>
            <div class="form">
                <input name="email" type="text" value={formData.email} onChange={HandleForm}/><br/>
                <input name="time" type="time" value={formData.time} onChange={HandleForm}/><br/>
                <input name="date" type="date" value={formData.date} onChange={HandleForm}/><br/>
                <input name="note" type="text" value={formData.note} onChange={HandleForm}/>

                <button onClick={HandleSubmit}>Submit</button>
                    <br/>
                    <table>
                         <thead> 
                            <tr>     
                        <th>Email</th>                          
                        <th>Time</th>
                        <th>Date</th>
                        <th>Note</th>
                             </tr>
                        </thead>
                        <tbody>
                            {TableData.map((data,index)=>(
                                <tr>
                                    <td>{data.email}</td>
                                    <td>{data.time}</td>
                                    <td>{data.date}</td>
                                    <td>{data.note}</td>
                                </tr>
                            ))}

                        </tbody>
                    
                        
                
            
                    </table>
            
            </div>
        </div>
                        

         )           
                    }    

