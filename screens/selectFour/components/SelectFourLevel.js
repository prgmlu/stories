import React, {useState,useRef, useContext, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import CustomAppButton from './CustomAppButton.js';
import NextButton from '../../shared_components/NextButton.js';

import { SelectFourContext } from "../context/selectfour-context";
import { AppContext } from "../../app-context/app-context.js";

import shuffle from 'lodash.shuffle';

export default function SelectFourLevel(props){
	 var [state, dispatch] = useContext(SelectFourContext); 
	const [stateX, dispatchX] = useContext(AppContext);

	const keys = function(obj){
		return Array.from(Object.keys(obj));
		}
	const vals = function(obj){
		return Array.from(Object.values(obj));
		}

	const getLevelFromAppContext = function(){
		const sel = stateX.selection;
		const allVocab = vals(stateX.activeVocab);
		const allVocabKeys = keys(stateX.activeVocab);
		const vocabKeys = shuffle(allVocabKeys).slice(0,4);
		var vocab = [];
		for (var i=0; i<4; i++){
			vocab.push(stateX.activeVocab[vocabKeys[i]]);
			}
		const pairA = vocab[Math.floor(Math.random()*4)];
		const pairB = stateX.imgs[pairA];
		return {
			pair:[pairA, pairB],
			vocab:[vocab[0],vocab[1],vocab[2],vocab[3]],
			vocabKeys:vocabKeys,
			img:pairB,
			correctAnsId:vocab.indexOf(pairA)+1,
			}
		}

	const resetState = ()=>{
		dispatch({type:"INIT", payload:getLevelFromAppContext()})
		}
	
const onAnswer = (id)=>{
	
				var correct = id == state.levelVars.correctAnsId;
				if (!correct){
					dispatchX({type: "CHANGE_HEARTS", payload:-1 })
					}

		dispatch({type:"SET_BG", payload: {id:id, type:!props.mainScreen?"notMainScreen":null}});
	if(props.mainScreen){
		dispatch({type:"DISABLE_ACTIVITY", payload:id});
		}
	else{
		if(id == props.correctAnsId){
			dispatch({type:"DISABLE_ACTIVITY", payload:id});
			}
		}
		};

	const getArabicAns = function(arabicWord){
		//console.log(stateX.activeVocab);
		for (var k in stateX.activeVocab){
			//console.log(stateX.activeVocab[k]);
			if(stateX.activeVocab[k]==arabicWord){
				return k;
				}
			}
		}

	if(props.mainScreen) 
		{ var {pair, vocab,vocabKeys, img, correctAnsId } = state.levelVars;
			var btnsActive = state.buttonsActive ;
		var chkBtnActive = state.checkButtonActive;
		
		}
	else{
		var vocab = props.vocab;
		var correctAnsId = props.correctAnsId;
		var bgs = props.bgs;
		
		useEffect(()=>{

			dispatch({type:"GENERATE_LEVEL_WITH_PARAMS", payload:{vocab:vocab, correctAnsId:correctAnsId, bgs:bgs}});

			dispatch({type:"SET_CORRECT_ANS_ID", payload:correctAnsId});


			},[])
			var btnsActive = state.buttonsActive ;
		}
	{if ((props.mainScreen && vocab && vocabKeys) || (!props.mainScreen && vocab)) {
		console.log(state.pairs)
		console.log(correctAnsId);
	return (
		<View style={{justifyContent:'center', flex:1, alignItems:'center'}} >

		{props.mainScreen?<Text style={{fontSize:24}}>Which is {getArabicAns(vocab[correctAnsId-1])} ?</Text>:null}
		{props.mainScreen?<Image style={{width:150,height:150, margin:20, borderRadius:20}} source={stateX.imgs[vocabKeys[correctAnsId-1]]?stateX.imgs[vocabKeys[correctAnsId-1]]:require("./fallback.png")} />:null}

		{!props.mainScreen?<Text style={{textAlign:"center",marginBottom:20, fontSize:20}}>{props.questionText}</Text>:null}

			<View style={{ width: "90%" }}>
				<CustomAppButton bgColor={state.bgs[0]} onPress={(e)=>{onAnswer(1)}} disabled={btnsActive} id={1} dummy={!props.mainScreen} sound={props.mainScreen?stateX.sounds[vocabKeys[0]]:null} text={vocab[0]}/>
				<CustomAppButton bgColor={state.bgs[1]} onPress={(e)=>{onAnswer(2)}} disabled={btnsActive} id={2} dummy={!props.mainScreen} sound={props.mainScreen?stateX.sounds[vocabKeys[1]]:null} text={vocab[1]}/>
				<CustomAppButton bgColor={state.bgs[2]} onPress={(e)=>{onAnswer(3)}} disabled={btnsActive} id={3} dummy={!props.mainScreen} sound={props.mainScreen?stateX.sounds[vocabKeys[2]]:null} text={vocab[2]}/>
				<CustomAppButton bgColor={state.bgs[3]} onPress={(e)=>{onAnswer(4)}} disabled={btnsActive} id={4} dummy={!props.mainScreen} sound={props.mainScreen?stateX.sounds[vocabKeys[3]]:null} text={vocab[3]}/>
		{props.mainScreen?<NextButton onPress={resetState} disabled={chkBtnActive} />:null }
			</View>
			<Text>
			</Text>
		</View>

		);}
		else{
return(			<Text>Loading</Text>);
			}
		 }
};

const styles = StyleSheet.create (
	{
		} );
