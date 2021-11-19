import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import { MostcommonContext } from "../context/mostcommon-context";

export default function MostcommonWord({word}){
	const [state, dispatch] = useContext(MostcommonContext);
	return (
			<Text > 
		</Text>
		);
};

const styles = StyleSheet.create (
	{
		} );
