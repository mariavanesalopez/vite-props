import React from 'react'

const Main = (props) => {
    const {nombre, apellido}= props

  return (
    <>    <div><h2>soy Main-hijo</h2></div>
   
    <h3>{nombre} {apellido}</h3>
    </>

  )
}

export default Main