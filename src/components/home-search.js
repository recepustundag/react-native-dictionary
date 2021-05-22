import React from 'react'
import { ImageBackground, Animated } from 'react-native'
import { Logo } from './icons'
import SearchBox from './search'
import Box from './styled/box'

import bg from '../assets/bg.jpg'

const ANIMATE_TIME = 230

const HomeSearch = ({isSearchFocus, onSearchFocus}) => {
  const fadeAnim = React.useRef(new Animated.Value(1)).current
  const heroHeight = React.useRef(new Animated.Value(230)).current

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

  return (
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
            <SearchBox onChangeFocus={(status) => onSearchFocus(status)} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default HomeSearch
