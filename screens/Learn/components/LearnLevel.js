import React, {useState,useEffect, useContext} from 'react';
import shuffle from 'lodash.shuffle';
import { StyleSheet,Image, TouchableOpacity, Text, View } from 'react-native';
import  LearnWord  from "./LearnWord";
import NextButton from "../../shared_components/NextButton"
import { LearnContext } from "../context/learn-context";
import { AppContext } from "../../app-context/app-context";

//import {MyBanner} from "../../../MyAds.js"
//import {
//	  AdMobBanner,
//	  AdMobInterstitial,
//	  PublisherBanner,
//	  AdMobRewarded,
//	  setTestDeviceIDAsync,
//	} from 'expo-ads-admob';

export default function LearnLevel({ansName, nextButtonDisabled,words, pairs}){
		const [state, dispatch] = useContext(LearnContext);
		const [stateX, dispatchX] = useContext(AppContext);

	const keys = function(obj){
		return Array.from(Object.keys(obj));
		}
	const vals = function(obj){
		return Array.from(Object.values(obj));
		}

const makeLevelFromAppContext = function(){
		const sel = stateX.selection;
		var allPairs = shuffle(keys(stateX.activeVocab));
		var	pairsA = allPairs.slice(0,4);
		//choose random 4
		var pairsB = [];
		for(var i=0; i<4; i++){
			pairsB.push(stateX['imgs'][pairsA[i]]);
			}
		var pairs = [
			[pairsA[0],pairsB[0]],
			[pairsA[1],pairsB[1]],
			[pairsA[2],pairsB[2]],
			[pairsA[3],pairsB[3]],
			];
		var words=[];
		for (var i=0; i<4; i++){
			words.push(stateX.activeVocab[pairsA[i]]);
			}
		var correctAns = Math.floor(Math.random()*4);
		var ansName = pairs[correctAns][0];
		var	params = {
			ansName:ansName,
			pairs:pairs,
			words: words
			}
		dispatch({type:"INIT", payload:{correctAnsId:correctAns,words:words,pairs:pairs,nextButtonDisabled:true, ansName:ansName}})
		//setParams(params);
		}

	const onPress = ()=>{
		dispatch({type: "RESET" })
		makeLevelFromAppContext();
		}

	useEffect(()=>{
		makeLevelFromAppContext()
		},[])


if (state.words){
	var vocabMap = stateX.activeVocab;
	var vocabKeysEng = keys(vocabMap);
	var	engWords = [];
	var sounds = [];
	for (var i=0; i<4; i++){
		for (var j=0; j<vocabKeysEng.length; j++){
			if ( state.words[i] == vocabMap[vocabKeysEng[j]]){
				engWords.push(vocabKeysEng[j]);
				sounds.push(stateX['sounds'][vocabKeysEng[j]])
				
				}
			}
		}
	}

	return (
		<View style={ {flex:1} }>
			<View style = {{ height:"15%" }} ><Text style={{marginTop:15, textAlign:"center" , justifyContent:"center",fontSize:25,alignSelf:"center", alignItems:"center" }}>Which is { ansName }?</Text></View>

			<View>
				<View style={{height:"60%", flexDirection:"row", flexWrap:'wrap'}}>
		{state.words?state.pairs.map((pair,i)=>(<LearnWord sound={sounds[i]} word={state.words[i]} key={i} id={i} source={state.pairs[i][1]}/>)):<Image/>}

		{/*		<LearnWord x="g" source={require("../context/fox.jpg")} />
		<LearnWord source={require("../context/computer.png")}/>
		<LearnWord source={require("../context/cat.jpeg")}/>
		<LearnWord source={require("../context/airplane.png")}/>
		*/}

	</View>
</View>

<View ><NextButton  onPress={onPress} disabled={state.nextButtonDisabled}/></View>

	{/*<AdMobBanner
  bannerSize="fullBanner"
		adUnitID="ca-app-pub-6213881381017449/3480564918" // Test ID, Replace with your-admob-unit-id
  servePersonalizedAds // true or false
			onDidFailToReceiveAdWithError={()=>{}} />
			*/}

	</View>

		);
};

const styles = StyleSheet.create (
	{
		} );
