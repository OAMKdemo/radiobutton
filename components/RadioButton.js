import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function RadioButton({options,onChangeValue}) {
  const [value, setValue] = useState(options[0].value)

  const handlePress = (selectedValue) => {
    setValue(selectedValue)
    onChangeValue(selectedValue)
  }

  return (
    <>
      {
        options.map((item) => (
          <View style={styles.buttonContainer}>
            <Text>{item.label}</Text>
            <Pressable style={styles.circle} onPress={() => handlePress(item.value)}>
              {
                value === item.value && <View style={styles.checked} />
              }
            </Pressable>
          </View>
        ))
      }
    </>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 30
  },
  circle: {
    height: 28,
    width: 28,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  checked: {
    width: 15,
    height: 15,
    borderRadius: 7,
    backgroundColor: '#000'
  }
});