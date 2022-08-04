import React from "react";
import { View, TextInput, Button } from "react-native";
import { styles } from "./styles";

const CustomInput = ({item, onChangeText, placeholder, onPressButton, inputValue, buttonText}) => {
    return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input}
        placeholderTextColor='#c59d5d'
        placeholder={placeholder}
        value={item}
        onChangeText={onChangeText}
      />
      <Button title={buttonText} color='#c59d5d' onPress={onPressButton} disabled={inputValue === ''}/>
     </View>
    )
}

export default CustomInput;