import React, {useState, useContext} from 'react';
import {StyleSheet,Image,TouchableOpacity, Text, View} from 'react-native';
//import ReactNativeTooltipMenu from 'react-native-tooltip-menu';
import {  Overlay } from 'react-native-elements';

const Inner = (props)=>{
	return (

	<View style={{ alignItems:"center", justifyContent:"space-between" }}>
		<Image style={{marginTop:50, width:"60%",height:"60%"}}source={require('../context/hint.jpg')}/>
		<Text style={{textAlign:"center", fontWeight:"bold", fontSize:20}}>{props.text}</Text>
		<TouchableOpacity onPress={props.onPress}style={{
			width:"80%",
				borderRadius:8,
				borderWidth: 2,
				}}>
					<Text style={{textAlign:"center", marginVertical:20, fontSize:20}}>Got it!</Text>
				</TouchableOpacity>
			</View>

		);
	 }


	export default HintOverlay = (props)=>{
		const [visible, setVisible] = useState(true);
		const toggleOverlay = () => {
			setVisible(!visible);
			};
		return(

			<Overlay isVisible={visible} overlayStyle={{width:"85%"}} onBackdropPress={toggleOverlay}>
				<Inner text={props.text} onPress={toggleOverlay}/>
			</Overlay>

			);
		}
		
