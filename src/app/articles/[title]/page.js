import React from 'react'

function page(props) {
    console.log(props);
  return (
    <div>
        <h1> show dynamic title </h1>
        <h1>{props.params.title}</h1>
    </div>
  )
}

export default page