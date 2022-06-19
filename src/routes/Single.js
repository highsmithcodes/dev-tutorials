import React from "react";

export const Single = ({id}) =>{
  console.log(id)

  return(
  <div>
    <h2>Single</h2>
    <p>{id}</p>
  </div>
  )
}

export default Single;