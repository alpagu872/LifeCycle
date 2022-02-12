
import React, {useEffect,useState}from 'react';
import {
  SafeAreaView, StyleSheet, Text, View, Button, 
} from 'react-native';


function App() {

  const [number, setNumber] = React.useState(0)

  useEffect(() => {
    console.log("Number updated " + number);
  }, [number]);

  useEffect(() => {
    console.log("Mounting...")
  },[])

  function updateCounter(){
    setNumber(number +  1)
  
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
