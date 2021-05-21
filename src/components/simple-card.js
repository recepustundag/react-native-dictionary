import React from 'react'
import Text from './styled/Text'
import Button from './styled/Button'

export function SimpleCardContainer({ children, ...props }) {
  return (
    <Button justifyContent="flex-start" bg="white" borderRadius="normal" py={16} {...props}>
      {children}
    </Button>
  )
}

export function SimpleCardTitle({ children }) {
  return (
    <Text fontSize={16} fontWeight="bold">
      {children}
    </Text>
  )
}
