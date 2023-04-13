import React from 'react'
const CardItem = (props) => {
  return (
<>
<div style={{ height: '400px', width: '400px', background:"rgb(243 241 243)", boxShadow: "4px 4px 4px 4px #0000004" , marginTop:"20px", paddingLeft:"10px" , borderRadius:"15px"}} className='Card'>
    <h2 style={{padding:"10px"}} className='font-poppins text-2xl '>{props.title}</h2>
   <div style={{textAlign: 'center',paddingTop:'20px' , marginLeft:'20px', color:'white' ,marginTop:'25px' ,height:"40px", width: '60px', borderRadius: '55px', background:'#410241'}} >
    {props.icon}
    </div>
    <div style={{height: '90px', marginLeft: "48px",borderLeft: '2px solid #410241'}} className="line">
    </div>
    <div style={{textAlign: 'center',paddingTop:'20px' , marginLeft:'20px', color:'white' ,marginTop:'0px' ,height:"40px", width: '60px', borderRadius: '55px', background:'#410241'}} >
    {props.icontwo}
    </div>

    <h4 style={{marginTop:'-200px', marginLeft:'95px'}} className='font-poppins'>{props.secondtitle}</h4>
    <p style={{marginTop:'-15px', width:"260px", color:"gray", marginLeft:'95px'}} className='font-poppins-light'>{props.content}</p>
    <h4 style={{marginTop:'55px', marginLeft:'95px'}} className='font-poppins'>{props.thirdtitle}</h4>
    <p style={{marginTop:'-15px', width:"260px", color:"gray", marginLeft:'95px'}} className='font-poppins'>{props.secondcontent}</p>
</div>
</>
  )
}

export default CardItem
