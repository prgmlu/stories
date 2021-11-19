import React, {useState, useContext} from 'react';
//import App from './App.js';
import Matching from './Matching.js'

import { MatchingContextProvider } from "./context/matching-context";

export default function MatchingWrapper(){
	return (
		<MatchingContextProvider> 
			<Matching />
		</ MatchingContextProvider>
		);
}
