"use client"

import { useParams } from 'next/navigation'
import React from 'react'

const Module = () => {
  const { moduleId } = useParams()
  return (
    <div>{moduleId}</div>
  )
}

export default Module