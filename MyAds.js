// //import {displayAds} from "./DisplayAds.js";
// import React from 'react';
// import {Text} from 'react-native';

// import {
// 	AdMobBanner,
// 	AdMobInterstitial,
// 	PublisherBanner,
// 	AdMobRewarded,
// 	setTestDeviceIDAsync,
// 	} from 'react-native-admob';

// //async function m(){
// //await setTestDeviceIDAsync('EMULATOR');}
// //m();


// export async function displayRewarded(){
// 	if (!displayAds) return;
// 	//await setTestDeviceIDAsync('EMULATOR');
// 	await AdMobRewarded.setAdUnitID('ca-app-pub-6213881381017449/7843756845'); // Test ID, Replace with your-admob-unit-id
// 	await AdMobRewarded.requestAdAsync();
// 	await AdMobRewarded.showAdAsync();
// 	dispatch({type:"SET_HEARTS",payload:3});
// 	}


// export async function displayInter(){
// 	if (!displayAds) return;
// 	//await setTestDeviceIDAsync('EMULATOR');
// 	await AdMobInterstitial.setAdUnitID('ca-app-pub-6213881381017449/9232682521'); // Test ID, Replace with your-admob-unit-id
// 	//await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
// 	await AdMobInterstitial.requestAdAsync();
// 	await AdMobInterstitial.showAdAsync();
// 	}



// export const MyBanner = function(){
// 	//return (<Text></Text>)
// 	return(
// 		<AdMobBanner
// 		bannerSize="fullBanner"
// 		adUnitID="ca-app-pub-6213881381017449/3480564918" // Test ID, Replace with your-admob-unit-id
// 		//servePersonalizedAds // true or false
// 		onDidFailToReceiveAdWithError={()=>{}} />
// 	)

// 	}
