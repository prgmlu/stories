import React, {useState,useEffect, useContext} from 'react';
import {Text,Image, View, TouchableOpacity} from 'react-native';
import { SelectFourContext } from "../context/selectfour-context";

//import { Audio } from 'expo-av';

import { AppContext } from "../../app-context/app-context.js";
import SoundPlayer from 'react-native-sound-player';



export default function CustomAppButton(props){
	const [state, dispatch] = useContext(SelectFourContext);
	const [stateX, dispatchX] = useContext(AppContext);
//alert(Object.keys(state));
	//

	const [fsound, setfsound] = React.useState();
	const [sound, setSound] = React.useState();
	const [sucsound, setsucsound] = React.useState();



	function _playSound(name, sound){
		var [pathh,ext] = sound.split(".");
		SoundPlayer.playSoundFile(pathh,ext);
		return;

	}


	const x = function(){
		//alert(state.levelVars.correctAnsId);
		//console.log(props.id);
		//alert(state.correctAnsId);
		//alert(state.levelVars.correctAnsId == props.id);
		if (props.dummy){
			if(state.correctAnsId == props.id){
				//_playSound("success", require("./y.mp3"));
	_playSound("success", "y.mp3");

			}
			else{
				//_playSound("f", require("./fail.mp3"));
	_playSound("f", "fail.mp3");

			}
		props.onPress();
			
		}

		else{

		if (state.levelVars.correctAnsId == props.id) {
			//playsucsound();
	_playSound("success", "y.mp3");
			dispatchX({type:"INC_STREAK"});
			}
		else{
	_playSound("f", "fail.mp3");
			dispatchX({type:"RESET_STREAK"});
			//playfsound();
			}
		if (props.sound) _playSound("state sound", props.sound);
		//playSound();
		props.onPress();
		}

		}

	return(
		<TouchableOpacity disabled={props.disabled} style={{...buttonStyle,backgroundColor:props.bgColor}} onPress={()=>{x();}} >
			<Text style={textStyle}>{props.text}</Text>
		</TouchableOpacity>
		);

	}


const textStyle = {
	textAlign:'center',
	fontSize:22,
	color:"white",
}
const buttonStyle = {
	borderRadius:8,
	margin:5,
	borderWidth: 2,
	paddingRight:35,
	paddingLeft:35,
	paddingBottom:5,
	paddingTop:5,
	shadowColor: "#000",
	shadowOffset: {
		width: 0,
		height: 2,
	},
	shadowOpacity: 0.25,
	shadowRadius: 3.84,
};
