import React, { useReducer, createContext } from "react";

export const LearnSelectionContext = createContext();


const initialState = {
	1:1
	}

const reducer = (state,action) => {
	switch(action.type) {
			case "HOLD":
				return {...state};
			}
	}


export const LearnSelectionContextProvider = props => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<LearnSelectionContext.Provider value={[state, dispatch]}>
		{props.children}
	</LearnSelectionContext.Provider>
		);
};
