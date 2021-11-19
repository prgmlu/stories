import React , {useContext} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { MatchingContext } from "../context/matching-context";

export default function NextButton(props){
const [state, dispatch] = useContext(MatchingContext);

	const	onPress = ()=>{

		dispatch({type:'RESET'});
		}
	return (
		<TouchableOpacity disabled={state.nextBtnDisabled} onPress={onPress} style={{...styles,backgroundColor:state.nextBtnDisabled?"gray":"darkseagreen"}}>
			<Text style={textStyles}> Check< /Text>
			</TouchableOpacity>
		);
}	
const styles = {
	//backgroundColor:'darkseagreen',
	borderRadius:10,
	padding:10,
	width:'90%',
	marginBottom:10
} 

const textStyles = {
	textAlign:'center',
	fontSize:18,
	fontWeight:'bold',
	color:'white',
};
