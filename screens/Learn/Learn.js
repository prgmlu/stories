import React, {useState,useEffect,useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import { LearnContext } from "./context/learn-context";
import { AppContext } from "../app-context/app-context";
import  LearnWord  from "./components/LearnWord";
import  LearnLevel  from "./components/LearnLevel";

import  HintOverlay  from "../story/components/HintOverlay.js";

import shuffle from 'lodash.shuffle';
import { StyleSheet,BackHandler,Dimensions, Image, TouchableOpacity, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import NoHeartsOverlay from '../../NoHeartsOverlay.js';
// import {displayInter,MyBanner} from "../../MyAds.js"



export default function Learn(props){
	const navigation = useNavigation();

function handleBackButtonClick() {
		// displayInter();
    navigation.goBack();
    return true;
  }
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);


	const keys = function(obj){
		return Array.from(Object.keys(obj));
		}
	const vals = function(obj){
		return Array.from(Object.keys(obj));
		}

		const [state, dispatch] = useContext(LearnContext);
		const [stateX, dispatchX] = useContext(AppContext);

	const {width, height} = Dimensions.get("screen");

	const heart = <Icon name="heart" size={30} color="#900" style={{margin:2}} />; 

	const [params, setParams] = useState({});

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
			correctAnsId:correctAns,
			ansName:ansName,
			pairs:pairs,
			words: words,
			color:["white","white","white","white"],
			buttonsDisabled :false,
			nextButtonDisabled:true,
			}
	return params;
		}

	useEffect(()=>{

		dispatch({"type":"INIT", payload:makeLevelFromAppContext()})
		}
		,[])

	return (

	<View style={{flex:1}}>
		 <HintOverlay text="Answer 3 in a row to get an extra heart!"/> 
		<NoHeartsOverlay visible={stateX.hearts<=0} />

		<View style={[ StyleSheet.absoluteFillObject , {backgroundColor:"slategray"}]} >
		{/*				<Image blurRadius={0} style={{width:width,height:height, resizeMode:"cover"}}source={require("../../img3.jpeg")} />*/}
			</View>

		<View style={{alignItems:"flex-end", marginTop:20,marginHorizontal:20}}>
		{heart}
		<Text>x{stateX.hearts}</Text>
	</View>

		<LearnLevel words={state.words} ansName={ state.ansName } pairs={state.pairs} nextButtonDisabled={ state.nextButtonDisabled } />
	</View>

		);
};

const styles = StyleSheet.create({

})


