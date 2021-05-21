import React from 'react'
import Text from './styled/Text'
import Box from './styled/box'
import Button from './styled/Button'

export function CardContainer({ children, ...props }) {
  return (
    <Button bg="white" borderRadius="normal" py={16} px={12} {...props}>
      <Box flex={1} borderLeftWidth={3} borderLeftColor="light" pl={12}>
        {children}
      </Box>
    </Button>
  )
}

export function CardTitle({ children }) {
  return (
    <Text fontSize={18} fontWeight="bold">
      {children}
    </Text>
  )
}

export function CardSummary({ children }) {
  return <Text fontSize={14} mt={8} color="textMedium">{children}</Text>
}
