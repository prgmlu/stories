import React from 'react';
import { StorySelectionContextProvider } from "./context/story-selection-context.js";
import StorySelection from './StorySelection.js';

export default function StorySelectionWrapper(props){
	return (
		<StorySelectionContextProvider>
			<StorySelection navigation={props.navigation}/>
		</StorySelectionContextProvider>
	)
	}
