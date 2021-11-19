import React, {useState, useContext, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
//import {  TouchableOpacity }  from 'react-native-gesture-handler';
import {  TouchableOpacity }  from 'react-native';
import { MatchingContext } from "../context/matching-context";
//import AnimatedColorView from 'react-native-animated-colors';

import { AppContext } from "../../app-context/app-context";
//import { Audio } from 'expo-av';
import SoundPlayer from 'react-native-sound-player';

export default function Word(props){

	const [animatePress, setAnimatePress] = useState(new Animated.Value(1))
	const fadeAnim = useRef(new Animated.Value(1)).current;
	const [activeIndex, setActiveIndex] = useState(0);  

	function _playSound(name, sound){
		var [pathh, ext] = sound.split('.');
		SoundPlayer.playSoundFile(pathh,ext)
		return
	}


	const [stateX, dispatchX] = useContext(AppContext);

	const keys = function(obj){
		return Array.from(Object.keys(obj));
		}
	const vals = function(obj){
		return Array.from(Object.values(obj));
		}

	function getKeyFromValue(obj, val){
		for (var key in obj){
			if (obj[key]==val) return key;
			}
		}

	const animateIn = () => {

		Animated.timing(fadeAnim, {
			toValue: 0.0,
			duration: 1000,
			useNativeDriver: false // Add This line
			}).start();
		}

	function getCount(Arr, item){
		var count = 0;
		for(var i = 0; i < Arr.length; ++i){
			if(Arr[i] == item)
				count++;
			}
		return count;
		}

	const [state, dispatch] = useContext(MatchingContext);

	const [redPairs,setRedPairs] = useState(0);

	const onPress = (e) => {

		console.log(state.activeWord)	
		console.log(props.word)	

		const a = state.activeWord;
		const b = state.truthMap[props.word];
		const c = state.activeId;
		const d = props.id;
		if (a!='none' && ((c>=5 && d<5) || (c<5 && d>=5) ) && (a!=b)){
			dispatchX({type:"CHANGE_HEARTS", payload:-1});
			dispatchX({type:"RESET_STREAK"});
			//playfsound();
			_playSound('fail', 'fail.mp3');
			}

		if (state.activeWord!='none' && (state.activeWord==state.truthMap[props.word])){
			//dispatchX({type:"CHANGE_HEARTS", payload:-1});
	_playSound('yes', 'y.mp3');
			dispatchX({type:"INC_STREAK"});
			//playsucsound();
			}

		//animateIn();
		//playsucsound();
		//playSound();
		if (keys(stateX.sounds).includes(props.word)) ;
		else{
			var myKey = getKeyFromValue(stateX.activeVocab, props.word);
			var mySound = stateX.sounds[myKey];
			_playSound('', mySound);
			}
		dispatch({type:'WORD_CLICKED', payload:{id:props.id, word:props.word}});

		var redCount = getCount(state.wordStates,'inactive_red');

		console.log(redPairs);
		console.log(redCount);
		console.log( state.checkedInAt);
		console.log(redPairs)

		if ((redPairs != redCount) && state.checkedInAt!=redCount){
			//alert("Im in")
			dispatch({type:"CHECK_IN", payload:redCount});
			setRedPairs(redCount);

			}

		//dispatch({type:'INC_PROGRESS'});
		setActiveIndex(1);
		//animateIn();
		}

	const wordState = state.wordStates[props.id];

	switch(wordState){
			case 'inactive_red':
				var s = wrongWordStyle;
			var t = wrongTextStyle;
			break;
			case 'red':
				var s = wrongWordStyle;
			var t = wrongTextStyle;
			break;
			case 'inactive_green':
				var s = correctWordStyle;
			var t = correctTextStyle;
			break;
			case 'green':
				var s = correctWordStyle;
			var t = correctTextStyle;
			break;
			case 'blue':
				var s = clickedWordStyle;
			var t = clickedTextStyle;
			break;
			case 'normal':
				var s = unclickedWordStyle;
			var t = unclickedTextStyle;
			break;
			case 'inactive':
				var s = unclickedWordStyle;
			var t = unclickedTextStyle;
			break;
			}


	var wordProps = {
		onPress : (e)=>onPress(e),
		style: s,
		disabled: (state.wordStates[props.id]=='inactive_red'||state.wordStates[props.id]=='inactive_green')? true:false
		}

	var textProps = {
		style: t 
		}

	var op = fadeAnim.interpolate({
		inputRange:[0,1],
		outputRange: ['rgba(240,128,128,1)', 'rgba(240,128,128,0)']
		});

	return (


	<Animated.View style={{backgroundColor:op}}>
		<TouchableOpacity opacity={ 1 } {...wordProps}>
			<Text {...textProps}> {props.word}</Text>
			</TouchableOpacity>
		</Animated.View>

		);
}	

const baseWordStyle = {
	color:"white",
	borderRadius:8,
	margin:5,
	borderWidth: 2,
	paddingRight:35,
	paddingLeft:35,
	paddingBottom:8,
	paddingTop:8,
	shadowColor: "#000",
	shadowOffset: {
		width: 0,
		height: 2,
		},
	shadowOpacity: 0.25,
	shadowRadius: 3.84,
};



const clickedWordStyle = {...baseWordStyle,
	backgroundColor:'azure',
	borderColor: "darkcyan",
};

const clickedTextStyle = {
	color:'darkcyan',
	fontSize:18,
	textAlign:'center'
};



const unclickedWordStyle = {...baseWordStyle,
	//backgroundColor:'white',
	backgroundColor:'#444',
	color:"white",
	//borderColor: "gray",
	elevation: 5,
};

const unclickedTextStyle = {
	color:'white',
	fontSize:18,
	textAlign:'center'
};



const wrongWordStyle = {...baseWordStyle,
	backgroundColor:'lightcoral',
	borderColor: "crimson",
};

const wrongTextStyle = {
	color:'crimson',
	fontSize:18,
	textAlign:'center'
};



const correctWordStyle = {...baseWordStyle,
	backgroundColor:'darkseagreen',
	borderColor: "green",
};


const correctTextStyle = {
	color:'green',
	fontSize:18,
	textAlign:'center'
}
