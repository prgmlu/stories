import React, { useReducer, createContext } from "react";

export const GameselectionContext = createContext();


const initialState = {
	hello:1
	}

const reducer = (state,action) => {
	switch(action.type) {
			case "HOLD":
				return {...state};
			}
	}


export const GameselectionContextProvider = props => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<GameselectionContext.Provider value={[state, dispatch]}>
		{props.children}
	</GameselectionContext.Provider>
		);
};
