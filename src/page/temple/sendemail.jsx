import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "../stact/head.css"
import {request_mail} from '/Users/lucky/Desktop/毕业论文/代码/webemail/src/api/login.js'
export default function MultipleSelectPlaceholder() {


 const [title,setTitle]=React.useState("");
 const [to_email,setTo_email]=React.useState("");
 const [message,setMessage]=React.useState("");
 const [type,setType]=React.useState("");
 const [sendtime,setSendtime]=React.useState("");
 const dataselects=['普通文本','附件']
 const onTitle=(e)=>{
  console.log(e.target.value);
  setTitle(e.target.value)
 }
 const onToemail=(e)=>{
  setTo_email(e.target.value)
 }
 const onMesaage=(e)=>{
  setMessage(e.target.value)
 }
 const onSelect =(index)=>{
  setType(index)
  console.log(type);
}
const onShendti=async(e)=>{
  const data={
    "title":title,
    'to_email':to_email,
    'message':message,
    'type':1,
    'send_email':"2064058933@qq.com",
    "sendtime":Date.now()
  }
await request_mail(data).then(res=>{
  console.log(res);
})
}

  return (
    <div className='sendmail'> 
    
          邮件发送
        {/* 收件人 */}
        <div className='fuli1'>
        <TextField fullWidth label="邮件标题" id="fullWidth"  onChange={onTitle} id=''/>
        </div>
        <div className='fuli2'>
        <TextField fullWidth label="收件人" id="fullWidth" onChange={onToemail}/>
        </div>
        <div className='fuli2'>
        <TextField fullWidth label="邮件内容" id="fullWidth" onChange={onMesaage}/>
        </div>
     
     <select className='select' >
     {dataselects.map((dataselect,index)=>( <option key={index} onClick={()=>onSelect(index)}>
      {dataselect}
      </option>
     ))}
      </select>
     <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onShendti}
      >
              发送
            </Button>
    </div>
  );
}