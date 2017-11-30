import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Button} from 'react-native-elements'

export default class App extends React.Component {
  state={
    checkboxes:[[0,""], [1, ""], [2, ""], [3,""], [4, ""], [5, ""], [6, ""], [7, ""], [8, ""]]
  }
  hiya(index){
   var originalBoxes = this.state.checkboxes
   console.log('value of box is: ', originalBoxes[index][1])
   if(originalBoxes[index][1] == ""){
     console.log("that box was empty")
     originalBoxes[index][1] = "x"
    }
   this.setState({
     checkboxes: originalBoxes
   }, ()=>{
     console.log('just tried to set state')
   })
  }
  render() {
    var squares = this.state.checkboxes
    return (
    
      <View style={styles.container}>
        {squares.map((square, index)=>{
          return <Button key = {index} title={square[1]} onPress={()=>this.hiya(index)}/>
        })}
        
        <Text>What's Good Bro</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
