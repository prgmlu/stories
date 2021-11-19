import React, {useState} from 'react';
import { StyleSheet, Text, View, Button ,TouchableOpacity} from 'react-native';
import Word from './Word.js';

export default function WordColumn(props){
	const ids = props.ids;

	return (
		<View >
		{props.words.map((word,i)=><Word key={ids[i]} id={ids[i]} word={word}/>)}
	</View>	
		);
}	
