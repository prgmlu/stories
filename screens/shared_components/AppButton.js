import React from 'react';
import {Text,Image, View, TouchableOpacity} from 'react-native';
//import { TouchableOpacity} from 'react-native-gesture-handler'


export default function AppButton({onPress, text}){
	return(
		<TouchableOpacity style={buttonStyle} onPress={onPress} >
			<Text style={textStyle}>{text}</Text>
		</TouchableOpacity>
		);

	}


const textStyle = {
	color:"white",
	textAlign:'center',
	fontSize:24,
 fontWeight:'bold'
}
const buttonStyle = {
	backgroundColor:"#444",
	zIndex:1,
	//opacity:.5,
	borderRadius:8,
	margin:5,
	borderWidth: 2,
	paddingRight:35,
	paddingLeft:35,
	paddingBottom:15,
	paddingTop:15,
	shadowColor: "#000",
	shadowOffset: {
		width: 0,
		height: 2,
	},
	shadowOpacity: 0.25,
	shadowRadius: 3.84,
};
