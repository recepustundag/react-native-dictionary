import React from 'react'
import { ImageBackground, StatusBar, Animated, FlatList, ActivityIndicator } from 'react-native'
import { useFocusEffect } from '@react-navigation/core'
import SafeAreaView from 'react-native-safe-area-view'

/* components */
import Box from '../components/styled/box'
import Logo from '../components/icons/Logo'
import Text from '../components/styled/Text'
import SearchBox from '../components/search'

import theme from '../utils/theme'

import bg from '../assets/bg.jpg'
import { CardContainer, CardSummary, CardTitle } from '../components/card'
import { SimpleCardContainer, SimpleCardTitle } from '../components/simple-card'

const ANIMATE_TIME = 230
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
  const fadeAnim = React.useRef(new Animated.Value(1)).current
  const heroHeight = React.useRef(new Animated.Value(230)).current
  const [homeData, setHomeData] = React.useState(null)

  const getHomeData = async () => {
    const response = await fetch('https://sozluk.gov.tr/icerik')
    const data = await response.json()
    setHomeData(data)
  }

  React.useEffect(() => {
    getHomeData()
  }, [])

  React.useEffect(() => {
    if (isSearchFocus) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: ANIMATE_TIME,
        useNativeDriver: false
      }).start()
      Animated.timing(heroHeight, {
        toValue: 30,
        duration: ANIMATE_TIME,
        useNativeDriver: false
      }).start()
    } else {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: ANIMATE_TIME,
        useNativeDriver: false
      }).start()
      Animated.timing(heroHeight, {
        toValue: 230,
        duration: ANIMATE_TIME,
        useNativeDriver: false
      }).start()
    }
  }, [heroHeight, isSearchFocus])

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content')
    }, [])
  )

  return (
    <Box as={SafeAreaView} flex={1} bg="softRed">
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.red} />

      {/* hero */}
      <Box
        as={Animated.View}
        position="relative"
        zIndex={1}
        style={{ height: heroHeight }}
      >
        <Box
          as={ImageBackground}
          source={bg}
          style={{ width: '100%', height: '100%' }}
        >
          {/* logo */}
          <Box
            as={Animated.View}
            style={{ opacity: fadeAnim }}
            flex={1}
            alignItems="center"
            justifyContent="center"
          >
            <Logo width={120} color="white" />
          </Box>

          {/* search */}
          <Box width="100%" mb={-42}>
            <Box p={16}>
              <SearchBox onChangeFocus={(status) => setSearchFocus(status)} />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* content */}
      {isSearchFocus ? (
        <Box px={16} pt={60} pb={40} flex={1} bg="softRed">
          <FlatList
            data={DATA}
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
        </Box>
      ) : (
        <Box px={16} py={40} flex={1} bg="softRed">
          <Box>
            <Text color="textLight" mt={10}>
              Bir Kelime
            </Text>
            <CardContainer
              onPress={() =>
                navigation.navigate('Detail', { title: 'merhaba' })
              }
            >
              { homeData ? (
                <>
                  <CardTitle>{homeData?.kelime[0].madde}</CardTitle>
                  <CardSummary>{homeData?.kelime[0].anlam}</CardSummary>
                </>
              ) : (
                <ActivityIndicator />
              )}
            </CardContainer>
          </Box>
          <Box mt={40}>
            <Text color="textLight" mt={10}>
              Bir deyim - Atasözü
            </Text>
            <CardContainer
              onPress={() =>
                navigation.navigate('Detail', { title: 'merhaba' })
              }
            >
              { homeData ? (
                <>
                  <CardTitle>{homeData?.atasoz[0].madde}</CardTitle>
                  <CardSummary>{homeData?.atasoz[0].anlam}</CardSummary>
                </>
              ) : (
                <ActivityIndicator />
              )}
            </CardContainer>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default SearchView
