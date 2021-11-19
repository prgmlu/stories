import React, {useState,useEffect, useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import { MatchingContext } from "./context/matching-context";
import { AppContext } from "../app-context/app-context.js";

import NoHeartsOverlay from '../../NoHeartsOverlay.js';

import { StyleSheet,BackHandler,Image,Dimensions, Text, View, nutton ,TouchableOpacity} from 'react-native';
import Header from './components/Header.js';
import NextButton from './components/NextButton.js';
import ColumnsContainer from './components/ColumnsContainer.js';

import  HintOverlay  from "../story/components/HintOverlay.js";

import shuffle from 'lodash.shuffle';

//import {displayInter,MyBanner} from "../../MyAds.js"
//import {
//	  AdMobBanner,
//	  AdMobInterstitial,
//	  PublisherBanner,
//	  AdMobRewarded,
//	  setTestDeviceIDAsync,
//	} from 'expo-ads-admob';


export default function Matching(props){
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
	const [state, dispatch] = useContext(MatchingContext);
	const [stateX, dispatchX] = useContext(AppContext);


	const {width,height} = Dimensions.get("screen");


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

	//function x(){
	//		var random5Words = getRandomFromObj(state.vocab);
	//	console.log("hi");
	//		var colAWords = Array.from(Object.keys(random5Words));
	//		var colBWords = Array.from(Object.values(random5Words));
	//	return {
	//		colAWords:colAWords,
	//		colBWords:colBWords,
	//		truthMap:{...getTruthMap(random5Words)}
	//		}
	//	}

	useEffect(()=>{
		dispatch({type:"POPULATE", payload:stateX.activeVocab})
		console.log("hi");
		console.log(stateX.activeVocab);
		var random5Words = getRandomFromObj(stateX.activeVocab,5);
		var colAWords = Array.from(Object.keys(random5Words));
		var colBWords = Array.from(Object.values(random5Words));
		//console.log(random5Words);
		dispatch({type:"INIT", payload:{
			colAWords:shuffle( colAWords ),
			colBWords:shuffle(colBWords),
			truthMap: {...getTruthMap(random5Words)}
		}})
			},[])

	return (
		<View style={styles.container}>
		 <HintOverlay text="Answer 3 in a row to get an extra heart!"/> 
		<NoHeartsOverlay visible={stateX.hearts<=0} />

			<View style={[ StyleSheet.absoluteFillObject , {backgroundColor:"slategray"}]} >
		{/*						<Image blurRadius={0} style={{width:width,height:height, resizeMode:"cover"}}source={require("../../img5.jpeg")} />*/}
			</View>

			<Header navigation={props.navigation} />
			<Text style={{fontWeight:'bold',alignSelf:'flex-start',fontSize:25 , margin:12, color:'black'}}>Tap the matching pairs </Text>
			<ColumnsContainer />
			<NextButton disabled={true}/>

		{/*<AdMobBanner
  bannerSize="fullBanner"
		adUnitID="ca-app-pub-6213881381017449/3480564918" // Test ID, Replace with your-admob-unit-id
  servePersonalizedAds // true or false
			onDidFailToReceiveAdWithError={()=>{}} />
			*/}

		</View>
		);
}


const styles = {
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign:'left'
		}
};
