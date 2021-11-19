import React from 'react';
import { LearnContextProvider } from "./context/learn-context.js";
import Learn from './Learn.js';

export default function LearnWrapper(props){
	return (
		<LearnContextProvider>
			<Learn />
		</LearnContextProvider>
	)
	}
