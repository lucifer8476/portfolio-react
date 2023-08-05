import React from 'react'
let arr=[
    {name:"Mukul",branch:"CSDS"},
    {name:"Aditya",branch:"CSDS"},
    {name:"sachin",branch:"CSE(AI)"},
    {name:"Arpit",branch:"CSDS"},
    {name:"Shubham",branch:"CSE"}
]
export default function Demo() {
  return (
    <>
    {
    arr.map(
        (obj)=>{
            return(
            <p>Your Name is {obj.name} , my branch is {obj.branch}</p>
            )
        }
        )
    }
        </>
  )
}
