import React from 'react'


const StateManagement = () => {
    const [state, setState] = React.useState(false);
    const backgroundColor = state? 'black' :'white';
    // const textcolor = state? 'white' : 'black';
  
  return (
    

    <div className={backgroundColor}>
    <div>Hello Worlds from State management Page {`${state}`}</div>
    <button onClick={()=>{
         setState(true)
    }}>make it true</button>

    <button onClick={()=>{
         setState(false)
    }}>
        Make it false
    </button>
</div>
  )
}

export default StateManagement