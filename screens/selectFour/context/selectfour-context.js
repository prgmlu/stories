import React, { useReducer, createContext } from "react";
import shuffle from 'lodash.shuffle';
//import {vocab} from "../../app-context/app-context"
export const SelectFourContext = createContext();

const getRandomElement = function(array){ return (array[Math.floor(Math.random() * array.length)])}

const generateRandomLevel = function (state){
	const pair = getRandomElement(state.pairs);
	var choices = [];
	var img = pair[1];
	choices.push(pair[0])
	var correctWord = choices[0];
	var i=0;
	while (choices.length<4){
		var choice = getRandomElement(state.vocab);
		if (! choices.includes(choice)){
			choices.push(choice);
			}
		}
	var shuffled = shuffle(choices);
	var correctAnsId = shuffled.indexOf(correctWord)+1;
	return {pair:pair,img:img, vocab:shuffled, correctAnsId:correctAnsId}
	}

const generateLevelWithParams = function(payload){
	return {vocab:payload.vocab, correctAnsId:payload.correctAnsId ,bgs:payload.bgs}


	}

	//				var level = generateRandomLevel(state);
//			return {...state,bgs:["white","white","white","white"], levelVars:level,checkButtonActive:true,buttonsActive:false};


const vocab =  ["cat","frog","horse", "goat"];
	const pairs =  [["cat", require('./cat.jpg')], ["frog", require('./frog.jpg')], ["horse", require('./horse.jpg')], ["goat", require('./goat.jpg')]];
	
const levelVars = generateRandomLevel({vocab:vocab, pairs:pairs});
const initialState = {
	bgs:["black","black","black","black"],
	vocab : vocab,
	pairs : pairs,
	id: 1,
	correctAnsId:null,
	levelState: "clear",
	checkButtonActive:true,
	buttonsActive:false,
	levelVars:levelVars,
	correctAnswer: false
	}


const reducer = (state,action) => {
	switch(action.type) {

			case "GENERATE_LEVEL":
				var level = generateRandomLevel(state);
				return {...state, levelVars:level,checkButtonActive:true,buttonsActive:false};
			case "INIT":
				return {...state,bgs:["black","black","black","black"],checkButtonActive:true,buttonsActive:false,levelVars:action.payload};

			case "GENERATE_LEVEL_WITH_PARAMS":
				var level = generateLevelWithParams(action.payload);
				return {...state,...level,checkButtonActive:true,buttonsActive:false, correctAnswer:false};

		case "SET_CORRECT_ANS_ID":
		return {...state, correctAnsId:action.payload};
			case "DISABLE_ACTIVITY":
				return {...state, checkButtonActive:false,buttonsActive:true};
			case "RESET":
				var level = generateRandomLevel(state);
				return {...state,bgs:["black","black","black","black"], levelVars:level,checkButtonActive:true,buttonsActive:false};
			case "SET_BG":
				var n = state.bgs.slice();
			if ( action.payload.type=='notMainScreen' ){


				n[action.payload.id-1]= action.payload.id == state.correctAnsId?"green":"red";
				var correctAnswer = action.payload.id == state.correctAnsId?true:false;
				}
			else{
				console.log(action.payload.id, state.levelVars.correctAnsId);
				n[action.payload.id-1]= action.payload.id == state.levelVars.correctAnsId?"green":"red";
				n[state.levelVars.correctAnsId-1] = 'green';
				var correctAnswer = action.payload.id == state.correctAnsId?true:false;
				}
				return {...state, bgs:n, correctAnswer:correctAnswer };

			}
	}


export const SelectFourContextProvider = props => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<SelectFourContext.Provider value={[state, dispatch]}>
		{props.children}
	</SelectFourContext.Provider>
		);
};
