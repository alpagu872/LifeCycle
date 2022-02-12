
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, StyleSheet, Text, View, Button,
} from 'react-native';


function App() {

  const [helloFlag, setHelloFlag] = React.useState(true)


  useEffect(() => {
    console.log("Mounting...")
  }, [])

  function updateFlag() {
    setHelloFlag(helloFlag == false);
    console.log("worked")
  }


  return (
    <SafeAreaView>

      <Text>Hello LifeCycle</Text>

      <Text>Number: {helloFlag}</Text>
      <Button title="Up!" onPress={updateFlag} style={{ margin: 10 }} />
      {helloFlag && <Hello />}

    </SafeAreaView>
  )
}




const styles = StyleSheet.create({

});

export default App;


function Hello() {
  useEffect(() => {
    
      console.log("Geldim")

      return () => {console.log("gidiyorum çeşm-i siyahım...")}
    
  } , [])
  return (
    <View style={{
      backgroundColor: 'aqua',
      padding: 10
    }}>
      <Text>I'm Hello Component</Text>
    </View>
  )
}
