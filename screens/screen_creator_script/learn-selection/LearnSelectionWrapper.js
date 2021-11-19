import React from 'react';
import { LearnSelectionContextProvider } from "./context/learn-selection-context.js";
import LearnSelection from './LearnSelection.js';

export default function LearnSelectionWrapper(props){
	return (
		<LearnSelectionContextProvider>
			<LearnSelection />
		</LearnSelectionContextProvider>
	)
	}
