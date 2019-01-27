import React from 'react'
import { View } from 'react-native'

const CardSection = (props) => {
  return(
      <View style={styles.containerStayles}>
       {props.children}
      </View>
  )
};

const styles={
  containerStayles:{
    borderBottomWidth:1,
    padding:5,
    backgroundColor:'#fff',
    justifyContent:'flex-start',
    flexDirection:'row',
    borderColor:'#ddd',
    position:'relative'
  }
}
export { CardSection };
