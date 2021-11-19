import React, {useState, useContext} from 'react';
import { StoryContext } from "./context/story-context";

import { StyleSheet, Text, View } from 'react-native';

export default function Story(props){
	const [state, dispatch] = useContext(StoryContext);

	return (

	<View >
		<Text>
		</Text>
	</View>

		);
};

const styles = StyleSheet.create({

})


