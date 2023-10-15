'use client'

import React, { useState, useEffect } from 'react'

interface ClientOnlyProps {
  children: React.ReactNode
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted)
    return null
    // <div className={'absolute-center'}>
    //   <img src={'/images/loading.svg'} alt={'Loading'} />
    // </div>
  return <>{children}</>
}

export default ClientOnly
