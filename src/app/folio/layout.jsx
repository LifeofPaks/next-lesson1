import React from 'react'

const layout = ({children}) => {
  return (
    <div className='layout container'>
        <h1 className='mainTitle'>Our Works</h1>
        {children}
    </div>
  )
}

export default layout