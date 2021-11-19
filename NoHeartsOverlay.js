import React, {useState,useEffect,useContext} from 'react';
import { StyleSheet,BackHandler,Dimensions, Image, TouchableOpacity, Text, View } from 'react-native';
import {  Overlay } from 'react-native-elements';
import AppButton from "./screens/shared_components/AppButton.js"
import { AppContext } from "./screens/app-context/app-context";

//import {
//	  AdMobBanner,
//	  AdMobInterstitial,
//	  PublisherBanner,
//	  AdMobRewarded,
//	  setTestDeviceIDAsync,
//	} from 'expo-ads-admob';



export default function NoHeartsOverlay(props){
const [state,dispatch] = useContext(AppContext);

async function displayRewarded(){
	//await setTestDeviceIDAsync('EMULATOR');
	await AdMobRewarded.setAdUnitID('ca-app-pub-6213881381017449/7843756845'); // Test ID, Replace with your-admob-unit-id
	AdMobRewarded.addEventListener("rewardedVideoDidRewardUser",()=>{dispatch({type:"SET_HEARTS",payload:3});})

	await AdMobRewarded.requestAdAsync();
	await AdMobRewarded.showAdAsync();
	}


	return(
		<Overlay overlayStyle={{height:"50%", borderRadius:20}}isVisible={state.hearts<=0} onBackdropPress={()=>{}} >
		<View style={{height:"100%", justifyContent:"space-around", borderRadius:50}}>
		<Text style={{textAlign:"center", fontSize:20}}>You're out of hearts!</Text>

		<View style={{justifyContent:"flex-start"}}>

		<Text style={{textAlign:"center"}}>watch an ad to get more hearts.</Text>
		<AppButton onPress={()=>displayRewarded()} text="Watch an Ad!"/>

	</View>
		</View>
		</Overlay>
		)

}
