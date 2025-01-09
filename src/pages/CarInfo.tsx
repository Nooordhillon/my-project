import React from 'react'
import { useParams } from 'react-router-dom'

const CarInfo = () => {
    const params = useParams()
    console.log(params) 
  return (
    <div>CarInfo</div>
  )
}

export default CarInfo