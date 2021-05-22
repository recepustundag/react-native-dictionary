import 'react-native-gesture-handler'
import * as React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

/* styled */
import theme from './utils/theme'

/* pages */
import SearchView from './views/search'
import HistoryView from './views/history'
import FavoriteView from './views/favorite'
import DetailView from './views/detail'

/* icons */
import { Left, More } from './components/icons'

/* tab navigator style */
import TabBar from './components/tab-bar'
import Button from './components/styled/Button'

const Tab = createBottomTabNavigator()
const HomeStack = createStackNavigator()

function SearchStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Search"
        component={SearchView}
        options={() => {
          return {
            headerShown: false
          }
        }}
      />
      <HomeStack.Screen
        name="Detail"
        component={DetailView}
        options={({ route, navigation }) => {
          return {
            title: (route.params?.title),
            headerStyle: {
              backgroundColor: theme.colors.softRed,
              shadowColor: 'transparent'
            },
            headerLeft: () => (
              <Button
                onPress={() => navigation.navigate('Search')}
                px={20}
                height="100%"
              >
                <Left color={theme.colors.textDark} />
              </Button>
            ),
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('Search')}
                px={20}
                height="100%"
              >
                <More color={theme.colors.textDark} />
              </Button>
            )
          }
        }}
      />
    </HomeStack.Navigator>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="SearchStack"
            tabBar={(props) => <TabBar {...props} />}
          >
            <Tab.Screen name="History" component={HistoryView} />
            <Tab.Screen name="SearchStack" component={SearchStack} />
            <Tab.Screen name="Favorite" component={FavoriteView} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default App
