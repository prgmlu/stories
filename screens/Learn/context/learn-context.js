import React, { useReducer, createContext } from "react";
import shuffle from 'lodash.shuffle';


export const LearnContext = createContext();


const getRandomElement = function(array){ return (array[Math.floor(Math.random() * array.length)])}
const generateLevel = function(pairs){

	var shuffledPairs = shuffle(pairs);  
	var	levelPairs = shuffledPairs.slice(0,4);

	return levelPairs;

	}
const pairs =  [["cat", require('./cat.jpg')], ["cat", require('./cat.jpg')], ["cat", require('./cat.jpg')], ["cat", require('./cat.jpg')], ["cat", require('./cat.jpg')],  ["cat", require('./cat.jpg')] ];

var initialPairs = generateLevel(pairs);

var correctAns = Math.floor(Math.random()*4);
var ansName = initialPairs[correctAns][0];

const clearColor = "transparent";

const initialState = {
	pairs: initialPairs,
	correctAnsId : correctAns,
	ansName : initialPairs[correctAns][0],
	colors :[clearColor,clearColor,clearColor,clearColor ],
	buttonsDisabled :false,
	nextButtonDisabled:true,

	}

const reducer = (state,action) => {
	switch(action.type) {
			case "RESET":
				var correctAnsId = Math.floor(Math.random()*4);
			var newPairs = generateLevel(pairs);
			ansName = newPairs[correctAnsId][0];
			return {pairs:newPairs,ansName:ansName, correctAnsId: correctAnsId ,colors:[clearColor,clearColor,clearColor,clearColor], buttonsDisabled:false, nextButtonDisabled:true }
			case "INIT":
				return {...state, ...action.payload}
			case "ANSWER":
				if (action.payload == state.correctAnsId){
					var newColors = state.colors.slice();
					newColors[action.payload]="green";
					}
			else{
				var newColors = state.colors.slice();
				newColors[action.payload]="red";
				}
			return {...state,colors:newColors, buttonsDisabled:true, nextButtonDisabled:false};
			}
	}


export const LearnContextProvider = props => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<LearnContext.Provider value={[state, dispatch]}>
		{props.children}
	</LearnContext.Provider>
		);
};
