import React from 'react'

export default function ExpressionEvaluation() {
    let x=80;
    let y=67;
  return (
    <div>
        <h1>Evaluation of Expression</h1>
        <h3>{x+" >"} {y+" :"} {(x>y)?"True":"False"}</h3>
    </div>
  )
}
