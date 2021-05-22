import React from 'react'
import { FlatList } from 'react-native'
import { SimpleCardContainer, SimpleCardTitle } from './simple-card'
import Box from './styled/box'
import Text from './styled/Text'

const SearchHistoryList = ({data}) => {
  return (
    <FlatList
      data={data}
      style={{ padding: 10 }}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={<Text mb={10}>Son Aramalar</Text>}
      renderItem={({ item }) => (
        <Box py={5}>
          <SimpleCardContainer>
            <SimpleCardTitle>{item.title}</SimpleCardTitle>
          </SimpleCardContainer>
        </Box>
      )}
    />
  )
}

export default SearchHistoryList
