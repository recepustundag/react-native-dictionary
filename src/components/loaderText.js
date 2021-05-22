import React from 'react'
import Box from './styled/box'

export default function LoaderText({...props }) {
  return (
    <Box bg="light" height={16} width={120} {...props}></Box>
  )
}
