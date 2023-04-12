import React from 'react'
const CardItem = (props) => {
  return (
<>
<div style={{ height: '400px', width: '400px', background:"rgb(243 241 243)", boxShadow: "4px 4px 4px 4px #0000004" , marginTop:"20px", paddingLeft:"10px" , borderRadius:"15px"}} className='Card'>
    {props.icon}
    <h2 style={{padding:"10px"}} className='font-poppins text-2xl '>{props.title}</h2>
    <h4 className='font-poppins'>{props.secondtitle}</h4>
    <p className='font-poppins'>{props.content}</p>
</div>
</>
  )
}

export default CardItem
