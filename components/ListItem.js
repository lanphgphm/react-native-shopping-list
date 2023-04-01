import React from 'react'; 
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'; 

const ListItem= ({item, deleteItem})=> {
  return (
  <TouchableOpacity style={styles.listItem}>
    <View style={styles.listItemView}>
        <Text style={styles.listItemText}> {item.text} </Text>
        <TouchableOpacity onPress={() => deleteItem(item.id)}>
            <Image source={require('/home/phuong/Documents/react-native/ShoppingList/components/close.png')} 
            style={styles.closeIcon} />
        </TouchableOpacity>
        
    </View>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8', 
    borderBottomWidth: 1, 
    borderColor: '#eee', 
  },
  listItemView:{
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItem: 'center',
  },
  listItemText: {
    fontSize: 18, 
    color: 'black',
  },
  closeIcon: {
    width: 15, 
    height: 15, 
  }
  
})

export default ListItem; 