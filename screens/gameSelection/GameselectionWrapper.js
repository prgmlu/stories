import React from 'react';
import { GameselectionContextProvider } from "./context/gameselection-context.js";


import Gameselection from './Gameselection.js';

export default function GameselectionWrapper(props){
	return (
		<GameselectionContextProvider>
			<Gameselection />
		</ GameselectionContextProvider>
	)
	}
