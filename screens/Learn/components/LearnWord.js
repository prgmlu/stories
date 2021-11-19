import React, {useState,useEffect, useContext} from 'react';
import { StyleSheet,Image, TouchableOpacity, Text, View } from 'react-native';

import { LearnContext } from "../context/learn-context";
import { AppContext } from "../../app-context/app-context";

//import { Audio } from 'expo-av';

import SoundPlayer from 'react-native-sound-player';

export default function LearnWord(props){
	const [state, dispatch] = useContext(LearnContext);
	const [stateX, dispatchX] = useContext(AppContext);

	const [sound, setSound] = React.useState();
	const [fsound, setfsound] = React.useState();
	const [sucsound, setsucsound] = React.useState();

	function _playSound(name, sound){
		console.log(sound)
		var pathh = sound.split(".")[0];
		var ext = sound.split(".")[1];
		SoundPlayer.playSoundFile(pathh,ext);
		return;
	}


	var	onPlaybackStatusUpdate = function(PlaybackStatus){
		console.log(PlaybackStatus);
		if (PlaybackStatus.didJustFinish){
			sound?sound.unloadAsync():null;
			}
		}



	const onPress = ()=>{
		var key=0;
		var	vocabObj = stateX.vocab[stateX['selection']];
		for (var k in vocabObj ){
			if ( vocabObj[k]==props.word ){
				key = k;
				break;
				}
			}

		_playSound("state sound", stateX['sounds'][key])

		var correct = props.id == state.correctAnsId;
		if (!correct){
			_playSound('f', 'fail.mp3')
			dispatchX({type:"CHANGE_HEARTS", payload:-1})
			dispatchX({type:"RESET_STREAK"});
			}
		else{
			//playsucsound();
			_playSound('f', 'y.mp3')
			dispatchX({type:"INC_STREAK"});
			}

		dispatch({type:"ANSWER",payload:props.id});
		}


	const imgSource = props.source? props.source : require("./fallback.jpg") ;
	return (
		<TouchableOpacity disabled={state.buttonsDisabled} onPress={onPress} style={{backgroundColor:state.colors[props.id],justifyContent:"center",borderRadius:10,alignItems:"center",width:"50%"}}> 
			<View style={{marginTop:15}}><Text style={{fontSize:20 ,fontWeight:"bold", color:"white"}}>{props.word}</Text></View>
			<Image style={styles.imgStyle}source={imgSource}/>
		</TouchableOpacity>



		);
};

const styles = StyleSheet.create (
	{
		opacityStyle : {
			justifyContent:"center",alignItems:"center",width:"50%"
			},
		imgStyle : {width:"60%", height:"60%", resizeMode:"cover", borderRadius:20, marginTop:10

			}
} );




