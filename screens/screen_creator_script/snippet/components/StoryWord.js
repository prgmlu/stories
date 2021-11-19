import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import { StoryContext } from "../context/story-context";

export default function StoryWord({word}){
	const [state, dispatch] = useContext(StoryContext);
	return (
			<Text > 
		</Text>
		);
};

const styles = StyleSheet.create (
	{
		} );
