 import React, {useState, useContext} from 'react';
import { StyleSheet, Text, View, Button ,TouchableOpacity} from 'react-native';
import WordColumn from './WordColumn.js';

import { MatchingContext } from '../context/matching-context';

export default function ColumnsContainer(props)  {
	const [state, dispatch] = useContext(MatchingContext);


	return (
			<View style={styles}>
			<WordColumn ids={[0,1,2,3,4]} key={1} words={state.colAWords} />
			<WordColumn ids={[5,6,7,8,9]} key={2} words={state.colBWords} />
			</View>
			);
}


const styles =  {
		padding:25,
		flexDirection: 'row'
	}
