import React, { useReducer, createContext } from "react";

export const StoryContext = createContext();


const initialState = {
	1:1
	}

const reducer = (state,action) => {
	switch(action.type) {
			case "HOLD":
				return {...state};
			}
	}


export const StoryContextProvider = props => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<StoryContext.Provider value={[state, dispatch]}>
		{props.children}
	</StoryContext.Provider>
		);
};
