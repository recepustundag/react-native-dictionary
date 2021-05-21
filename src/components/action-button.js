import React from 'react'
import Button from './styled/Button'
import Text from './styled/Text'

const ActionButton = ({ children, ...props }) => {
  return (
    <Button
      minWidth="actionButton"
      height="actionButton"
      borderRadius="full"
      bg="white"
      px={8}
      {...props}
      style={{
        shadowColor: '#000',
        shadowOpacity: 0.16,
        elevation: 1,
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 2
        }
      }}
    >
      {children}
    </Button>
  )
}

export function ActionButtonTitle({ children, ...props }) {
  return <Text color="textLight" fontSize={14} fontWeight="bold" mx={8} {...props}>{children}</Text>
}

export default ActionButton
