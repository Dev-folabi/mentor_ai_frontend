import React from 'react'

interface PageProps{
  params:{
    moduleId: string
  }
}
const Module = ({params}: PageProps) => {
  return (
    <div>{params.moduleId}</div>
  )
}

export default Module