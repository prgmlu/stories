import React, {useState, useContext} from 'react';
import { LearnSelectionContext } from "./context/learn-selection-context";

import { StyleSheet, Text, View } from 'react-native';

export default function LearnSelection(props){
	const [state, dispatch] = useContext(LearnSelectionContext);

	return (

	<View >
		<Text>
		</Text>
	</View>

		);
};

const styles = StyleSheet.create({

})


