import React, { useReducer, createContext } from "react";

export const AppContext = createContext();

import { Audio } from 'expo-av';
import {sounds} from './sounds.js';
import {imgs} from './imgs.js';
//import AsyncStorage from '@react-native-async-storage/async-storage';

import AsyncStorage from '@react-native-async-storage/async-storage';


const storeData = async (value) => {
	  try {
			    await AsyncStorage.setItem('hearts', value)
			  } catch (e) {
					    // saving error
				   }
					   }


const initialVocab = require("./initialVocab.json");

//const loadSound = async function() {
//	const { sound } = await Audio.Sound.createAsync(
//		require("./y.mp3")
//		);
//	alert("load");
//	sound.playAsync();
//	return sound;
//}

//getAll()


var all = {};
const cats = Object.keys(initialVocab);
for ( var k of cats){
	all = {...all, ...initialVocab[ k ]}
	}



	//var all = {...initialVocab.nouns, ...initialVocab.fruit_vegetables, ...initialVocab.colors, ...initialVocab.countries, ...initialVocab.animals, ...initialVocab.adjectives, ...initialVocab.objects}
//var all = {...initialVocab.nouns, ...initialVocab.fruit_vegetables, ...initialVocab.colors, ...initialVocab.verbs, ...initialVocab.countries, ...initialVocab.animals, ...initialVocab.misc}
export const vocab = {...initialVocab,all:all}



const initialState = {

	//hearts:getData()?getData():9,
	//hearts:getData()?getData():9,
	//hearts : (async ()=> await getData())(),
	streak:0,
	hearts:100,
	vocab : vocab,
	selection:"all",
	imgs:imgs,
	sounds:sounds,
	activeVocab:all,
	gridState: [true,false,false,false,false,false,false]
	//ySound: (async () =>await loadSound())()

	}
console.log(initialState.activeVocab)
	//console.log(initialState.ySound);

const reducer = (state,action) => {
	switch(action.type) {

			case "HOLD":
				return {...state};

			case "CHANGE_HEARTS":
				storeData(String(state.hearts+action.payload));
				return {...state, hearts:state.hearts+action.payload};

			case "INC_STREAK":
				if ((state.streak%3==0 ) && ( state.streak!=0)){ 
					return {...state,hearts:state.hearts+1, streak:state.streak+1};
					}

				else{
					return {...state, streak:state.streak+1};
					}

			case "RESET_STREAK":
				return {...state, streak:0};

			case "SET_HEARTS":
				storeData(String(action.payload));
				return {...state, hearts:action.payload};

			case "SET_GRID":
				return {...state, gridState:action.payload};

			case "SET_SELECTION":
				//the payload should be like ['colors', 'countries', 'animals']
				var	u = {}
			for(var k of action.payload){
				u = {...u, ...initialVocab[k]}    
				}
			//alert(action.payload);
			if(action.payload == 'all'){
				u = all;
				}
			return {...state, activeVocab: u, selection:action.payload};


			}
	}


export const AppContextProvider = props => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<AppContext.Provider value={[state, dispatch]}>
		{props.children}
	</AppContext.Provider>
		);
};
