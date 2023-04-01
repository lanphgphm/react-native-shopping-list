import React, {useState} from 'react'; 
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native'; 
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = ()=> {
  const [items, setItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Eggs'},
    {id: 3, text: 'Fruits'},
    {id: 4, text: 'Vegetblae'},
  ])

  // delete item 
  const deleteItem = (id) => {
    setItems(otherItems => {
      return otherItems.filter(item => item.id !== id);
    });
  }

  // add item 
  const addItem = (text) => {
    if(!text){
      Alert.alert("Error", "Please enter an item", [{text: "OK"}]);
    } else {
      setItems(otherItems => {
        return [{id: Math.ceil(Math.random()*1000), text: text},...otherItems]
      });
    }
  }

  return (
  <View style={styles.container}>
    <Header title="Shopping List" />
    <AddItem addItem={addItem}/>
    <FlatList data={items} renderItem={({item}) => 
      <ListItem item={item} deleteItem={deleteItem}/> } 
      />
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
  }, 
  
})

export default App; 