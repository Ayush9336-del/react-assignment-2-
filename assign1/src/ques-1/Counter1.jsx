import React, { useState } from 'react'

const Counter1= ({data}) => {


           function handleCounter( ) {
                count++ ; 
                console.log(count)
                setCount(count) ;
           }
            let [count , setCount ] = useState(0) ;

            
            console.log(data)

  return (
    <div className='counter-wrapper'>
      <div className='counter-card'>

        <p className='count'>  {count}</p>
        <p> {data}</p>

        <button onClick={handleCounter}>Increment</button>
      </div>
    </div>
  )
} 

export default Counter1
