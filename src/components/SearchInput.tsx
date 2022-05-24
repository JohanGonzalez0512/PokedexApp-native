import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, StyleProp, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props {
  style?: StyleProp<ViewStyle>;
  onDebounce: (value: string) => void;
}

export const SearchInput = ({ style, onDebounce }: Props) => {

  const [textValue, setTextValue] = useState('');

  const debouncedValue = useDebouncedValue(textValue);

  useEffect(() => {
    onDebounce(debouncedValue);
  }, [debouncedValue])



  return (
    <View style={{
      ...styles.container,
      ...style as any

    }}>
      <View style={styles.textBackground}>
        <TextInput
          placeholderTextColor="grey"
          placeholder='Buscar pokemón'
          style={styles.textInput}
          autoCapitalize='none'
          autoCorrect={false}
          value={textValue}
          onChangeText={setTextValue}
        />
        <Icon
          name='search-outline'
          color="grey"
          size={30}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {

  },
  textBackground: {
    backgroundColor: '#f3f1f3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    color: 'grey',
    top: 2,
  }
});
