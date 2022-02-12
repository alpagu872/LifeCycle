
import React, {useEffect,useState}from 'react';
import {
  SafeAreaView, StyleSheet, Text, View, Button, 
} from 'react-native';


function App() {

  const [number, setNumber] = React.useState(0)

  useEffect(() => {
    console.log("Number updated " + number);
  }, [number]);

  function updateCounter(){
    console.log("1. State value: " + number);
    setNumber(number +  1)
    console.log("2. State value: " + number);
  }


  return (
    <SafeAreaView>

      <Text>Hello LifeCycle</Text>

      <Text>Number: {number}</Text>
      <Button title="Up!" onPress={updateCounter} style={{margin:10}}/>
      

    </SafeAreaView>
  )
}




const styles = StyleSheet.create({

});

export default App;
