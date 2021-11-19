import React, {useState, useContext} from 'react';
import {StyleSheet, I18nManager,Text, View} from 'react-native';
//import ReactNativeTooltipMenu from 'react-native-tooltip-menu';
import {  Overlay } from 'react-native-elements';

import { StoryContext } from "../context/story-context";

const Inner = ({ word,translation, notes })=>{
	return (

	<View style={{textAlign:"center",borderRadius:20,justifyContent:"space-evenly",alignItem:"center",width:'95%',padding:10}}>

		<View style={{flexDirection:I18nManager.isRTL?"row-reverse":"row",justifyContent:"space-evenly", margin:10}}>
			<Text style={{ fontSize:20,textAlign:"center" }}>{word}</Text>
		</View>

		{/*		<View style={{flexDirection:"row", justifyContent:"space-evenly", padding:10}}>*/}
		<View style={{flexDirection:I18nManager.isRTL?"row-reverse":"row",justifyContent:"space-evenly", margin:10}}>
			<Text style={{ fontSize:20,textAlign:"left" }}>Translation:</Text>
			<Text style={{ fontSize:20,textAlign:"center", color:"red" }}>{translation}</Text>
		</View>

		{/*		<View style={{flexDirection:"column", justifyContent:"space-evenly", padding:10}}>*/}
		<View style={{flexDirection:I18nManager.isRTL?"column":"column",justifyContent:"space-evenly", margin:10}}>
		{/*			<Text style={{ textAlign:I18nManager.isRTL?"right":"left",fontSize:20 }}>Notes:</Text>*/}
			<Text style={{ textAlign:I18nManager.isRTL?"right":"left",fontSize:20 }}></Text>
		</View>


	</View>

		);
	}

	export default TranslationOverlay = ()=>{
	const [state, dispatch] = useContext(StoryContext);

		return(
			<Overlay isVisible={state.transVisible} onBackdropPress={()=>dispatch({type:"HIDE_TRANS",payload:null})}>
				<Inner translation={state.transDict[state.transWord]} word={state.transWord} notes={state.notesDict[state.transWord]} onPress={()=>dispatch({type:"HIDE_TRANS"})}/>
			</Overlay>
			);
		}
