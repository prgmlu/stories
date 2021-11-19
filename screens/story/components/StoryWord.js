import React, {useState, useContext} from 'react';
import {StyleSheet,I18nManager, Text, View} from 'react-native';
//import ReactNativeTooltipMenu from 'react-native-tooltip-menu';
import {  Overlay } from 'react-native-elements';
import {scale, verticalScale, moderateScale} from '../../../utils.js';

import { StoryContext } from "../context/story-context";
//import { HintOverlay } from "./HintOverlay.js";

export default function StoryWord({word,onPress}){
	const [state, dispatch] = useContext(StoryContext);
	const sp = " ";
	//alert(word)
	const filterPunc = function(word){
		var toRemove = ['.','..','...','،','!','?',"؟",':'];
		for (var punc of toRemove){
			word = word.replace(punc, '');
			}
		return word;
		alert(word);
		}

	return (

			<Text onPress={()=>dispatch({"type":"WORD_CLICKED", payload:filterPunc(word)})} style={styles.text}>{word + " "}</Text>
		);

};

const styles = StyleSheet.create (
	{
		text:{
			fontSize:18,
			color: 'black',
			textAlign: 'center',
		}} );
