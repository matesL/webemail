import { useEffect, useState } from "react"
import PrimarySearchAppBar from "./temple/heand"
import Table from "./temple/table"
import "./stact/head.css"
import { get_listmail } from '../api/login'
import SendForm from './temple/sendemail'
 function Index() {
    const [rows,setRows]=useState([]);
    const data={
        'id':1
    }
    
    useEffect(()=>{

    function datalist(){ get_listmail(data).then(res=>{
            if(res.data.code===200) {
                setRows(res.data.list)
                console.log(rows);
                return;
             }
         })
        }
        datalist();
        },[])
    
   
    return(
            <div>
                <div className="heand" >
                   <PrimarySearchAppBar/>
                </div>
                <div className="heand2" >
                <div >
                    <SendForm datalist={rows}/>
                </div>
                </div>
            </div>
    );
}
export default  Index