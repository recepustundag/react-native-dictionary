import React from 'react'
import Box from './styled/box'
import Text from './styled/Text'

export function DetailSummaryItemContainer({ children, order, type, border, ...props }) {
  return (
    <Box position="relative" bg="white" px={28} py={20} {...props}>
      {border && (
        <Box
          position="absolute"
          left={12}
          right={12}
          top={0}
          height={1}
          bg="light"
        />
      )}
      <Box flexDirection="row">
       { order && <Text color="textLight" ml={-14} mr={8}>
          1
        </Text>}
        { type && <Text color="red">İSİM</Text>}
      </Box>
      <Box mt={8}>{children}</Box>
    </Box>
  )
}
export function DetailSummaryItemTitle({ children }) {
  return <Text fontWeight="bold">{children}</Text>
}
export function DetailSummaryItemSummary({ children }) {
  return (
    <Text mt={12} ml={10} color="textLight">
      {children}
    </Text>
  )
}
