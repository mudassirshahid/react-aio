import React from 'react'

const Cards = (props) => {
  return (
    <>
      <h2 className='font-playwrite-au text-3xl'>{props.name}</h2>
      <p className='font-felipa'>{props.title}</p>
    </>
  )
}

export default Cards
