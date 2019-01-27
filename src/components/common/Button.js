import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = ({onPress, children}) => {
const { textStyle, buttonStyle } =styles

  return(
    <TouchableOpacity  onPress={ onPress } style={buttonStyle}>
      <Text style={ textStyle }>
        {children}
      </Text>
    </TouchableOpacity>
  )
};

const styles= {
  textStyle : {
    alignSelf:'center',
    color: "#007aff",
    fontSize:16,
    fontWeight:'600'
  },
  buttonStyle: {
    flex: 1,
    height: 40,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'stretch',
    backgroundColor: '#fff',
    borderRadius: 2,
    borderWidth:1,
    borderColor:'#007aff',
    marginLeft:5,
    marginRight:5
  }
}

export { Button };
