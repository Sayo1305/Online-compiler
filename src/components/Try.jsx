import React, { useState } from 'react'

const Try = () => {
      const [Var , SetVar] = useState("dj");
      const handle_click = () =>{
      }
  return (
    <div onClick={handle_click}>
      {Var}
    </div>
  )
}

export default Try
