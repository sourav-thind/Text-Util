import React from 'react'

export default function Alert(props) {
  const capitalise =(word)=>{
   const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase()+ lower.slice(1);

  }
  return (
    <div style={{height:'50px'}} className='mx-5 mt-1'>
    {props.alert &&<div className={`alert alert-${props.alert.type} h-40 show`} role="alert">
  {capitalise(props.alert.type)}:{props.alert.msg}
</div>}
</div>
  )
}
