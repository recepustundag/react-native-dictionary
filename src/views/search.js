import React from 'react'
import { ImageBackground, StatusBar, Animated } from 'react-native'
import { useFocusEffect } from '@react-navigation/core'
import SafeAreaView from 'react-native-safe-area-view'

/* components */
import Box from '../components/styled/box'
import Logo from '../components/icons/Logo'
import Text from '../components/styled/Text'
import SearchBox from '../components/search'

import theme from '../utils/theme'

import bg from '../assets/bg.jpg'

const ANIMATE_TIME = 230;

function SearchView() {
  const [isSearchFocus, setSearchFocus] = React.useState(false)
  const fadeAnim = React.useRef(new Animated.Value(1)).current
  const heroHeight = React.useRef(new Animated.Value(230)).current


  React.useEffect(() => {
    if (isSearchFocus) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: ANIMATE_TIME,
        useNativeDriver: false,
      }).start()
      Animated.timing(heroHeight, {
        toValue: 30,
        duration: ANIMATE_TIME,
        useNativeDriver: false,
      }).start()
    }else{
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: ANIMATE_TIME,
        useNativeDriver: false,
      }).start()
      Animated.timing(heroHeight, {
        toValue: 230,
        duration: ANIMATE_TIME,
        useNativeDriver: false,
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
          <Box as={Animated.View} style={{opacity: fadeAnim}} flex={1} alignItems="center" justifyContent="center">
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

      <Box flex={1} bg="softRed" pt={isSearchFocus ? 0 : 26}>
        <Box bg="white" px={16} py={40} flex={1}>
          <Text>Merhaba</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default SearchView
