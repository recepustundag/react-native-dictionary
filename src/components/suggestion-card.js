import React from 'react'
import { ActivityIndicator } from 'react-native'
import { CardContainer, CardSummary, CardTitle } from './card'
import Box from './styled/box'
import Text from './styled/Text'

const SuggestionCard = ({title, data, onPress, ...props}) => {
  return (
    <Box {...props}>
      <Text color="textLight" mt={10}>
        {title}
      </Text>
      <CardContainer
        onPress={onPress}
      >
        { data ? (
          <>
            <CardTitle>{data.madde}</CardTitle>
            <CardSummary>{data.anlam}</CardSummary>
          </>
        ) : (
          <ActivityIndicator />
        )}
      </CardContainer>
    </Box>
  )
}

export default SuggestionCard
