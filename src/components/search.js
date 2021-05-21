import React from 'react'
import { Keyboard } from 'react-native'

import theme from '../utils/theme'

/* components */
import Box from './styled/box'
import Input from './styled/Input'
import Button from './styled/Button'
import Text from './styled/Text'

/* icons */
import { Search, Close } from './icons'

function SearchBox({onChangeFocus}) {
  const [isFocus, setFocus] = React.useState(false)
  const [value, setValue] = React.useState('')

  React.useEffect(() => {
    onChangeFocus(isFocus)
  }, [onChangeFocus, isFocus])

  const onCancel = () => {
    setFocus(false)
    Keyboard.dismiss()
  }

  const onClear = () => {
    setValue('')
  }

  return (
    <Box flexDirection="row" alignItems="center">
      <Box flex={1} position="relative">
        <Input
          style={{
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 24,
            shadowOffset: {
              width: 0,
              height: 4
            }
          }}
          bg="white"
          color="textDark"
          borderRadius="normal"
          placeholder="Türkçe Sözlük'te Ara"
          placeholderTextColor="textMedium"
          height={52}
          pl={52}
          value={value}
          onFocus={() => setFocus(true)}
          onChangeText={text => setValue(text)}
        />

        { value.length > 0 && (
        <Button onPress={onClear} position="absolute" right={16} top={14}>
          <Close color={theme.colors.textDark} />
        </Button>)}

        <Button position="absolute" left={16} top={14}>
          <Search color={theme.colors.textMedium} />
        </Button>
      </Box>

      {isFocus && (
        <Button onPress={onCancel} px={15} height={52}>
          <Text color={theme.colors.textMedium}>Vazgeç</Text>
        </Button>
      )}
    </Box>
  )
}

export default SearchBox
