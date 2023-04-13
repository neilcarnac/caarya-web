import React from 'react'
import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
const BlankItem = (props) => {
  return (
<>
<div style={{ height: '400px', width: '400px', background:"rgb(243 241 243)", 
boxShadow: "4px 4px 4px 4px #0000004" , marginTop:"20px", paddingLeft:"10px" , borderRadius:"15px"}} className='Card'>
<h2 style={{padding:"10px", textAlign:"center", color:"rgb(197 154 197)"}} className='font-poppins text-2xl '>{props.title}</h2>
<div style={{textAlign:'center',marginTop:'90px'}}>
<IconButton>
{props.icon} 
</IconButton>
</div>
</div>
</>
  )
}

export default BlankItem
