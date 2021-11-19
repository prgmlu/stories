import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import { SelectFourContext } from "../context/selectfour-context";

export default function SelectFourWord({word}){
	const [state, dispatch] = useContext(SelectFourContext);
	return (
			<Text > 
		</Text>
		);
};

const styles = StyleSheet.create (
	{
		} );
