import React from 'react';
import { StoryContextProvider } from "./context/story-context.js";
import { SelectFourContextProvider } from "../selectFour/context/selectfour-context.js";
import Story from './Story.js';
import {Text} from 'react-native';

export default function StoryWrapper(props){
	const key = Number(props.route.params.key);
	return (
		<SelectFourContextProvider>
		<StoryContextProvider>
		<Story route={props.route} key={key} />
		</StoryContextProvider>
	</SelectFourContextProvider>
	)
	}
