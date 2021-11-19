import React, {useState, useContext} from 'react';
import { LearnSelectionContext } from "./context/learn-selection-context";

import { StyleSheet, Text, View } from 'react-native';
import AppButton from '../shared_components/AppButton.js';

import { useNavigation } from '@react-navigation/native';

export default function LearnSelection(props){
	const [state, dispatch] = useContext(LearnSelectionContext);
	const navigation = useNavigation();

	return (

	<View >
						<AppButton text="Learn" onPress={()=>navigation.navigate('Learn')} />

	</View>

		);
};

const styles = StyleSheet.create({

})


