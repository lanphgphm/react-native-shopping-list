import React, {useState} from 'react'; 
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Button} from 'react-native'; 

const AddItem= ({addItem})=> {
    const [text, setText] = useState('');

    const onChange = (textValue) => setText(textValue);

    return (
        <View style={styles.addItem}>
            <TextInput 
                placeholder='Add Item...' 
                style={styles.input} 
                onChangeText={onChange}
                />
            <Button 
                style={{color: '#808080'}} 
                title='+ Add Item'
                onPress={() => addItem(text)}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 60, 
        padding: 8, 
        fontSize: 18,
    }, 
    btnText: {
        color: 'navy', 
        fontSize: 20, 
        textAlign: 'center',
    },
})

export default AddItem; 