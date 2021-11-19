import React, { useReducer, createContext } from "react";

export const AppContext = createContext();

import { Audio } from 'expo-av';

//const loadSound = async function() {
//	const { sound } = await Audio.Sound.createAsync(
//		require("./y.mp3")
//		);
//	alert("load");
//	sound.playAsync();
//	return sound;
//}

var initialVocab = {
nouns:
	{
		"bed":"سرير",
		"table":"طاولة",
		"chair":"كرسي",
		"clock":"ساعة",
		"water":"ماء",
		},
	verbs:{
		
		"eat" : "يأكل",
		"drink" : "يشرب",
		"sleep" : "ينام",
		"wait" : "ينتظر",
		"love" : "يحب",
		
		},

	countries:{
		"egypt" : "مصر",
		"syria" : "سوريا",
		"iraq" : "العراق",
		"turkey" : "تركيا",
		"croatia" : "كرواتيا",
		},

	animals:{
		"cat" : "قطة",
		"fox" : "ثعلب",
		"donkey" : "حمار",
		"dolphin" : "دولفين",
		"lion" : "أسد",
		},
}

var all = {...initialVocab.nouns, ...initialVocab.verbs, ...initialVocab.countries, ...initialVocab.animals}
export const vocab = {...initialVocab,all:all}

export const imgs = {
	"cat" : require("./cat.jpg"),
	"fox" : require("./fox.jpg"),
	"donkey" : require("./donkey.jpg"),
	"dolphin" : require("./dolphin.jpg"),
	"lion" : require("./lion.jpg"),
	"love" : require("./love.jpg"),
	"wait" : require("./wait.jpg"),
	"sleep" : require("./sleep.jpg"),
	"drink" : require("./drink.jpg"),
	"eat" : require("./eat.jpg"),
	"bed" : require("./bed.jpg"),
	"table" : require("./table.jpg"),
	"chair" : require("./chair.jpg"),
	"clock" : require("./clock.jpg"),
	"water" : require("./water.jpg"),
	"egypt" : require("./egypt.jpg"),
	"syria" : require("./syria.jpg"),
	"iraq" : require("./iraq.png"),
	"turkey" : require("./turkey.jpg"),
	"croatia" : require("./croatia.png"),
	}

export const sounds = {
	"cat" : require("./cat.m4a"),
	"fox" : require("./fox.m4a"),
	"donkey" : require("./donkey.m4a"),
	"dolphin" : require("./dolphin.m4a"),
	"lion" : require("./lion.m4a"),
	"love" : require("./love.m4a"),
	"wait" : require("./wait.m4a"),
	"sleep" : require("./sleep.m4a"),
	"drink" : require("./drink.m4a"),
	"eat" : require("./eat.m4a"),
	"bed" : require("./bed.m4a"),
	"table" : require("./table.m4a"),
	"chair" : require("./chair.m4a"),
	"clock" : require("./clock.m4a"),
	"water" : require("./water.m4a"),
	"egypt" : require("./egypt.m4a"),
	"syria" : require("./syria.m4a"),
	"iraq" : require("./iraq.m4a"),
	"turkey" : require("./turkey.m4a"),
	"croatia" : require("./croatia.m4a"),
	}

const initialState = {

	hearts:3,
	vocab : vocab,
	selection:"all",
	imgs:imgs,
	sounds:sounds,
	//ySound: (async () =>await loadSound())()

	}
	//console.log(initialState.ySound);

const reducer = (state,action) => {
	switch(action.type) {

			case "HOLD":
				return {...state};

			case "CHANGE_HEARTS":
				return {...state, hearts:state.hearts+action.payload};

			case "SET_SELECTION":
				return {...state, selection:action.payload};

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
