import React from 'react'

/* styled */
import Box from './styled/box'
import Button from './styled/Button'
import theme from '../utils/theme'

/* icons */
import { RotateCcw, Search, Bookmark } from './icons'

function TabBar({ state, descriptors, navigation }) {
  
  return (
    <Box
      pb={20}
      bg="white"
      flexDirection="row"
      style={{
        elevation: 1,
        borderTopColor: theme.colors.softRed,
        borderTopWidth: 2
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        return label === 'SearchStack' ? (
          <Box p={15} bg="white" mt={-15} borderRadius="full" key={label}>
            <Button size={56} bg="red" borderRadius="full" onPress={onPress}>
              <Search stroke="white" />
            </Button>
          </Box>
        ) : (
          <Button
            key={label}
            pt={6}
            flex={1}
            flexDirection="column"
            height={56}
            onPress={onPress}
          >
            {label === 'History' && (
              <RotateCcw
                color={isFocused ? theme.colors.red : theme.colors.textLight}
              />
            )}
            {label === 'Favorite' && (
              <Bookmark
                color={isFocused ? theme.colors.red : theme.colors.textLight}
              />
            )}
            <Box
              size={4}
              bg={isFocused ? 'red' : 'white'}
              borderRadius="full"
              mt={6}
            />
          </Button>
        )
      })}
    </Box>
  )
}

export default TabBar
