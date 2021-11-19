import React, {useState,useEffect, useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import { SelectFourContext } from "./context/selectfour-context";

import  HintOverlay  from "../story/components/HintOverlay.js";

import { StyleSheet, BackHandler, Dimensions, Text, View , Image} from 'react-native';

import AppButton from '../shared_components/AppButton';

import SelectFourLevel from './components/SelectFourLevel.js';
import { AppContext } from "../app-context/app-context.js";
import shuffle from 'lodash.shuffle';

import Icon from 'react-native-vector-icons/FontAwesome5';
import NoHeartsOverlay from '../../NoHeartsOverlay.js';

//import {displayInter,MyBanner} from "../../MyAds.js"
//import {
//	  AdMobBanner,
//	  AdMobInterstitial,
//	  PublisherBanner,
//	  AdMobRewarded,
//	  setTestDeviceIDAsync,
//	} from 'expo-ads-admob';


export default function SelectFour(props){
	const navigation = useNavigation();


function handleBackButtonClick() {
		displayInter();
    navigation.goBack();
    return true;
  }
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);

	const [state, dispatch] = useContext(SelectFourContext);
	const [stateX, dispatchX] = useContext(AppContext);

	const {width, height} = Dimensions.get("screen");

	const heart = <Icon name="heart" size={30} color="#900" style={{margin:2}} />; 

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
		console.log(vocabKeys)
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

	useEffect(()=>{
		dispatch({type:"INIT", payload:getLevelFromAppContext()})
		}, [])

	return (
		<>

		<NoHeartsOverlay visible={stateX.hearts<=0} />
		 <HintOverlay text="Answer 3 in a row to get an extra heart!"/> 

			<View style={[ StyleSheet.absoluteFillObject , {backgroundColor:"slategray"}]} >
		{/*				<Image blurRadius={0} style={{width:width,height:height, resizeMode:"cover"}}source={require("../../img8.jpeg")} />*/}
			</View>

			<View style={{flex:1}}>

				<View style={{alignItems:"flex-end", marginTop:10, marginHorizontal:20, marginBottom:0}}>

					{heart}
				<Text>x{stateX.hearts}</Text>

	</View>

	<SelectFourLevel key={state.id} mainScreen={true}/>

		{/*<AdMobBanner
  bannerSize="fullBanner"
		adUnitID="ca-app-pub-6213881381017449/3480564918" // Test ID, Replace with your-admob-unit-id
  servePersonalizedAds // true or false
			onDidFailToReceiveAdWithError={()=>{}} />
			*/}
</View>


</>
		);
};
const styles = StyleSheet.create({

})


