import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import { GameselectionContext } from "../context/gameselection-context";

export default function GameselectionWord({word}){
	const [state, dispatch] = useContext(GameselectionContext);
	return (
			<Text > 
		</Text>
		);
};

const styles = StyleSheet.create (
	{
		} );
