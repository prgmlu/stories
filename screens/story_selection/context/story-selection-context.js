import React, { useReducer, createContext } from "react";


export const StorySelectionContext = createContext();


const stories = [
	{
		name: 'Growing Up.',
		avatar: './ara.png'
		},
	{
		name: 'A Question.',
		avatar: './ara.png'
		},
	{
		name: 'A Big Family.',
		avatar: './ara.png'
		},
	{
		name: 'New Clothes.',
		avatar: './ara.png'
		},
	{
		name: 'The Passport.',
		avatar: './ara.png'
		},
	{
		name: 'Money.',
		avatar: './ara.png'
		},
	{
		name: 'The Museum.',
		avatar: './ara.png'
		},

	{
		name: 'A Cheap Jacket.',
		avatar: './ara.png'
		},

	{
		name: 'One Thing.',
		avatar: './ara.png'
		},

	//{
	//	name: 'Random',
	//	avatar: './ara.png'
	//	},

]


const initialState = {
	stories : stories
	}

const reducer = (state,action) => {
	switch(action.type) {
			case "HOLD":
				return {...state};
			}
			}


export const StorySelectionContextProvider = props => {

	const [state,dispatch] = useReducer (reducer, initialState);

	return (
		<StorySelectionContext.Provider value={[state, dispatch]}>
		{props.children}
	</StorySelectionContext.Provider>
		);
	}
