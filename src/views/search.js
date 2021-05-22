import React from 'react'
import {
  StatusBar,
} from 'react-native'
import { useFocusEffect } from '@react-navigation/core'
import SafeAreaView from 'react-native-safe-area-view'

/* components */
import Box from '../components/styled/box'

import theme from '../utils/theme'

import SuggestionCard from '../components/suggestion-card'
import SearchHistoryList from '../components/search-history-list'
import HomeSearch from '../components/home-search'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item'
  }
]

function SearchView({ navigation }) {
  const [isSearchFocus, setSearchFocus] = React.useState(false)
  const [homeData, setHomeData] = React.useState(null)

  const getHomeData = async () => {
    const response = await fetch('https://sozluk.gov.tr/icerik')
    const data = await response.json()
    setHomeData(data)
  }

  React.useEffect(() => {
    getHomeData()
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content')
    }, [])
  )

  return (
    <Box as={SafeAreaView} flex={1} bg="softRed">
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.red} />

      {/* hero */}
      <HomeSearch isSearchFocus={isSearchFocus} onSearchFocus={setSearchFocus} />

      {/* content */}
      {isSearchFocus ? (
        <Box px={16} pt={60} pb={40} flex={1} bg="softRed">
          <SearchHistoryList data={DATA} />
        </Box>
      ) : (
        <Box px={16} py={40} flex={1} bg="softRed">
          <SuggestionCard
            title="Bir Kelime"
            data={homeData?.kelime[0]}
            onPress={() => navigation.navigate('Detail', {keyword: homeData?.kelime[0].madde })}
          />
          <SuggestionCard
            mt={40}
            title="Bir deyim - Atasözü"
            data={homeData?.atasoz[0]}
            onPress={() => navigation.navigate('Detail', {keyword: homeData?.atasoz[0].madde })}
          />
        </Box>
      )}
    </Box>
  )
}

export default SearchView
