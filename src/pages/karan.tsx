import React from 'react'
import App from '../App';
import KaranDetails from '../components/KaranDetails';

const karan = () => {
  return (
    <div>
    <KaranDetails
    name="KaranAujla"
    photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwOssodYSMHz86QUhxliirRmq4Ll_7haJfGA&s"
    DoB="January 18, 1997"
    height="1.75m"
    like="500"
    followers="10k"
    post="130"
  />,
  </div>
  )
}

export default karan;