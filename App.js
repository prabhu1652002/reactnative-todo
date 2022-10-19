import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View , ScrollView} from 'react-native';
import Header from 'awesomeproject/src/components/Header.js';


export default function App() {
  const [todoItem, setTodoItem]=useState('');
  const [todoList, setTodoList]=useState([]);
  const addTodoList =() =>{
    setTodoList([...todoList, todoItem]);
    console.log(todoList)
  }
  return (
    <View style={styles.page}>
      <Header title="My to do list"/>
      <View style={styles.container}>
          <View>
            <TextInput 
              placeholder="Enter your task to do."
               
              style={styles.TextInput}
              onChangeText={text=> setTodoItem(text)}
              value={todoItem}
              >
            </TextInput>
            <Button title=" Add todo"
              onPress={addTodoList}
              
              />
              
          </View>
          <ScrollView >
            {todoList.map(todo=> <View key={todo} style={styles.todoItem}>
              <Text >
                {todo}
              </Text>
            </View>)}
          </ScrollView>
      </View>
    </View>
      
  );
}


const styles = StyleSheet.create({
  page:{
    backgroundColor:'red'
  },
  container: {
    padding: 60,
    backgroundColor:'purple'
  },
  TextInput: {
    padding: 10,
    borderColor: 'white',
    
    marginBottom: 10,
    borderWidth: 2,
    color:'white'
  },
  todoItem: {
    marginTop: 10,
    padding: 20,
    backgroundColor: 'lightgrey',
    textColor:'white',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black'



  }
});
