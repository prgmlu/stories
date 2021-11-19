import React from 'react';
import { SelectFourContextProvider } from "./context/selectfour-context.js";
import SelectFour from './SelectFour.js';

export default function SelectFourWrapper(props){
	return (
		<SelectFourContextProvider>
			<SelectFour />
		</SelectFourContextProvider>
	)
	}
