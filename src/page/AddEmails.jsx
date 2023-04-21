import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { insert } from '../api/login';
function AddEmails()
{
 const data={
    "send_email": "7728289@qq.com",
    "to_email": "83888@qq.com",
    "user_id": 2,
    "key_pop": "sadhiaskdakj"
}
const Sendformx= async (event)=>{
    insert(data).then(res=>{
        console.log(res)
    })
}
// const [username,setUsername]=useState("")
    return(
        <Box>
                <Box
                component="form"
                sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </Box>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </Box> <Box
                component="form"
                sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </Box>
        <Button variant="contained" disableElevation onClick={Sendformx}>
            提交
        </Button>
    </Box>
    );
    
}
export default  AddEmails