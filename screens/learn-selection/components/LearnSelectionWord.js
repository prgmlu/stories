import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import { LearnSelectionContext } from "../context/learn-selection-context";

export default function LearnSelectionWord({word}){
	const [state, dispatch] = useContext(LearnSelectionContext);
	return (
			<Text > 
		</Text>
		);
};

const styles = StyleSheet.create (
	{
		} );
