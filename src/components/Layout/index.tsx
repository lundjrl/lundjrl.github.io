import React from 'react'


export const Layout: React.FC = ({children}) => (
        <div className='relative flex'>
      <div className="container w-full px-3 mx-auto md:px-0">{children}</div>
    </div>
    )
