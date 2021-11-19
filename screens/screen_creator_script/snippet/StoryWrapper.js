import React from 'react';
import { StoryContextProvider } from "./context/story-context.js";
import Story from './Story.js';

export default function StoryWrapper(props){
	return (
		<StoryContextProvider>
			<Story />
		</StoryContextProvider>
	)
	}
