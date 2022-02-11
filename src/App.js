
import React, {useEffect,useState}from 'react';
import {
  SafeAreaView, StyleSheet, Text, View, Button, 
} from 'react-native';


function App() {

  const [number, setNumber] = React.useState(0)
  const [counter, setCounter] = useState(100)

  useEffect(() => {
    console.log("Number updated");
  }, [number]);

  useEffect(() =>{
    console.log("Counter Updated");
  }, [counter]);

  return (
    <SafeAreaView>

      <Text>Hello LifeCycle</Text>

      <Text>Number: {number}</Text>
      <Text>Counter: {counter}</Text>
      <Button title="Up!" onPress={() => setNumber(number + 1)} style={{margin:10}}/>
      
      <Button title="Up Counter! " onPress={() => setCounter(counter+100)} style={{padding:10}}/>

    </SafeAreaView>
  )
}




const styles = StyleSheet.create({

});

export default App;
