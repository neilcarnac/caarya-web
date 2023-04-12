import React from 'react'
const CardItem = (props) => {
  return (
<>
<div style={{ height: '500px', width: '400px', background:"#ebdfeb", boxShadow: "1px solid black" , borderRadius:"15px", marginTop: "-500px" }} className='Card'>
    {props.icon}
    <h1 style={{padding: "5px"}} className='font-poppins text-2xl '>{props.title}</h1>
    <h2 className='font-poppins text-2xl'>{props.secondtitle}</h2>
    <p className='font-poppins'>{props.content}</p>
</div>
</>
  )
}

export default CardItem
