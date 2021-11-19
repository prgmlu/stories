import React, { useReducer, createContext } from "react";

import shuffle from 'lodash.shuffle';
export const MatchingContext = createContext();

	function getRandom(arr,n){
		return shuffle(arr).slice(0,n);
		}
	function getRandomFromObj(obj,n){
		var a = getRandom(Object.keys(obj),n)
		var ret = {}
		for(var i=0; i<n; i++){
			ret[a[i]] = obj[a[i]]
			}
		return ret;
		}
function getTruthMap(obj){
    var oneWay = obj;
    var twoWay = {};
    for (var i=0; i<Object.keys(obj).length; i++){
        var key = Object.keys(obj)[i];
        var val = Object.values(obj)[i];
        twoWay[val] = key;
    }
    return {...oneWay,...twoWay}
}

function x(state){
		var random5Words = getRandomFromObj(state.vocab,5);
		var colAWords = shuffle(Array.from(Object.keys(random5Words)));
		var colBWords = shuffle(Array.from(Object.values(random5Words)));
	return {
		colAWords:colAWords,
		colBWords:colBWords,
		truthMap:{...getTruthMap(random5Words)}
		}
	}

const clearWords = ['normal','normal','normal','normal','normal','normal','normal','normal','normal','normal'];
const initialState = {
	checkedInAt:0,
	colAWords: [],
	colBWords: [],
	truthMap : {

		},
	vocab:null,
	activeWord : 'none',
	activeId:'none',
	colClicked:'none',
	progress:0.0,
	answeredCount:0,
	wordStates:clearWords,
	nextBtnDisabled:true

};

const reducer = (state, action) => {
	switch (action.type) {

			case "RESET":
				var u = x(state);
			console.log(u);
				return {...initialState, vocab:state.vocab,...u}

			case "POPULATE":
				return {...state, vocab:action.payload}

			case "CHECK_IN":
				return {...state, checkedInAt:action.payload}

			case "INIT":
				return {...state,truthMap:action.payload.truthMap, colAWords:action.payload.colAWords, colBWords:action.payload.colBWords}
			case "WORD_CLICKED":
				var wordState = state.wordStates[action.payload.id]
			if (wordState =='inactive' || wordState=='red' || wordState=='green') return {...state};

			if ( action.payload.id < 5 ){
				//colA
				if (state.colClicked == 'A' || state.colClicked =='none'){
					//if clicked on col A, and the prev click was on col A, or a clear column
					var newArr = state.wordStates.slice();
					if (newArr[action.payload.id] == 'blue'){
						newArr[action.payload.id] = 'normal';
						var newActiveWord='none';
						var newActiveId='none';
						}else{
							newArr[action.payload.id] = 'blue';
							var newActiveWord = action.payload.word;
							var newActiveId = action.payload.id;
							}
					for (var i=0;i<5;i++){
						if (i!= action.payload.id){
							if (newArr[i]=='blue'){
								newArr[i] = 'normal'
								}
							}
						}


					return {
						...state,nextBtnDisabled:!newArr.includes("normal")?false:true, wordStates: newArr, activeWord:newActiveWord,activeId:newActiveId, colClicked:newArr[action.payload.id]=='blue'?'A':'none'
						}
					}
				if (state.colClicked == 'B' ){
					//an answer attempt, ends with 2 new greens or 2 new reds

					var newArr = state.wordStates.slice();
					if (state.truthMap[state.activeWord]==action.payload.word){

						newArr[action.payload.id] = 'green';
						newArr[state.activeId] ='green';
						newArr[state.activeId] ='inactive_green';
						newArr[action.payload.id] = 'inactive_green';
						}
					else{ 

												newArr[action.payload.id] ='normal';
												newArr[state.activeId] ='normal';
						//						newArr[state.activeId] ='inactive_red';
						//						newArr[action.payload.id] = 'inactive_red';

						}


					return {
						...state,answeredCount:state.answeredCount+1, nextBtnDisabled:!newArr.includes("normal")?false:true, wordStates: newArr, colClicked:'none', activeWord: 'none', activeId:'none'
						}
					}
				}

			if (action.payload.id >= 5){
				//colA
				if (state.colClicked == 'B' || state.colClicked =='none'){


					var newArr = state.wordStates.slice();
					if (newArr[action.payload.id] == 'blue'){
						newArr[action.payload.id] = 'normal';
						var newActiveWord='none';
						var newActiveId='none';
						}else{
							newArr[action.payload.id] = 'blue';
							var newActiveWord = action.payload.word;
							var newActiveId=action.payload.id;
							}
					for (var i=5;i<10;i++){
						if (i!= action.payload.id){
							if (newArr[i]=='blue'){
								newArr[i] = 'normal'
								}
							}

						}


					return {
						...state,nextBtnDisabled:!newArr.includes("normal")?false:true, wordStates: newArr, activeWord:newActiveWord, activeId:newActiveId, colClicked:newArr[action.payload.id]=='blue'?'B':'none'
						}
					}
				if (state.colClicked == 'A' ){

					var newArr = state.wordStates.slice();
					if (state.truthMap[state.activeWord]==action.payload.word) {

						newArr[action.payload.id] = 'green';
						newArr[state.activeId] = 'green';
						newArr[state.activeId] ='inactive_green';
						newArr[action.payload.id] = 'inactive_green';
						}
					else {

												newArr[action.payload.id] ='normal';
												newArr[state.activeId] = 'normal';
						//						newArr[state.activeId] ='inactive_red';
						//						newArr[action.payload.id] = 'inactive_red';

						}


					return {
						...state,answeredCount:state.answeredCount+1,nextBtnDisabled:!newArr.includes("normal")?false:true, wordStates: newArr, colClicked:'none', activeWord: 'none', activeId:'none'
						}
					}
				//colB
				}

			return {
				...state
				};

			case "INC_PROGRESS":
				var newProgress = (state.progress +.1)%1;
			return {
				...state,
				progress: (state.progress+.1)%1
				};

			default:
				throw new Error();
			}
};

export const MatchingContextProvider = props => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<MatchingContext.Provider value={[state, dispatch]}>
		{props.children}
	</MatchingContext.Provider>
		);
};
