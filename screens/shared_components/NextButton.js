import React , {useContext} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function NextButton(props){

	const	onPress = ()=>{
		console.log(props);
		}
	const bgc = props.disabled ? "gray" : "darkseagreen";
const buttonTxt = props.text ? props.text :"Next";
	return (
		<TouchableOpacity disabled={props.disabled} onPress={props.onPress} style={{...styles, backgroundColor:bgc}}>
			<Text style={textStyles}>{buttonTxt}< /Text>
			</TouchableOpacity>
		);
}	
const styles = {
	backgroundColor:'darkseagreen',
	borderRadius:10,
	padding:10,
	marginTop:5,
	marginBottom:10,
} 

const textStyles = {
	textAlign:'center',
	fontSize:18,
	fontWeight:'bold',
	color:'white',
};
