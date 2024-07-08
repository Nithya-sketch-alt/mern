import {useState } from "react"
export default function FeedBack(){
    const [formData,SubmitFormData]=useState({
        name:"",
        roll :"",
        feedback:""
    })
    const[TableData,SubmitTable]=useState([])
    function HandleChange(e){
        const [name,value]=e.target;
        SubmitFormData({...formData,[name]:value});
}
function HandleSubmit(){
    SubmitTable([...TableData,
        formData]);
    SubmitFormData({name:"",
        roll:"",
        feedback:""});
    }

    return(
        <div>
        <input type="text" name="name" value={formData.name} onChange={HandleChange} placeholder="Name"/>
        <input type="text" name="roll" value={formData.roll} onChange={HandleChange} placeholder="Roll NUmber"/>
        <input type="text" nmae="feedback" value={formData.feedback} onCHange={HandleChange}  placeholder="YOur Feedback"/>
        <button onClick={HandleSubmit}>Submit</button>
        <table>
            <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll</th>
                        <th>Feedback</th>
                    </tr>
                    </thead>
                        <tbody>
                            {table.map((key,index) =>(
                                <tr>
                                    <td>(key.name)</td>
                                    <td>(key.roll)</td>
                                    <td>(key.feedback)</td>
                                </tr>
                            ))}
                        </tbody>
        </table>
        </div>
    )
}