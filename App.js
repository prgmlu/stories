import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import LearnSelectionWrapper from './screens/learn-selection/LearnSelectionWrapper.js';
import HomePage from './screens/homepage/HomePage.js';

import MatchingWrapper from './screens/matching/MatchingWrapper.js';
import StoryWrapper from './screens/story/StoryWrapper.js';
import GameselectionWrapper from './screens/gameSelection/GameselectionWrapper.js';

import StorySelectionWrapper from './screens/story_selection/StorySelectionWrapper.js';

//import MostCommonWrapper from './screens/Mostcommon/MostcommonWrapper.js';
import SelectFourWrapper from './screens/selectFour/SelectFourWrapper.js';
import LearnWrapper from './screens/Learn/LearnWrapper.js';
import FlatListScreen from './screens/flatlist/FlatListScreen.js';


import {StatusBar,Image,Button, StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';

import { AppContextProvider } from "./screens/app-context/app-context.js";


//import {
//	AdMobBanner,
//	AdMobInterstitial,
//	PublisherBanner,
//	AdMobRewarded,
//	setTestDeviceIDAsync,
//	} from 'expo-ads-admob';

import { displayAds } from "./DisplayAds.js";

//async function m(){
//	await setTestDeviceIDAsync('EMULATOR');}
//m();

const Stack = createStackNavigator();

const config = {
	animation: 'spring',
	config: {
		stiffness: 1000,
		damping: 500,
		mass: 3,
		overshootClamping: true,
		restDisplacementThreshold: 0.01,
		restSpeedThreshold: 0.01,
		},
	};


async function displayInter(){
	if (!displayAds) return;
	//await setTestDeviceIDAsync('EMULATOR');
	await AdMobInterstitial.setAdUnitID('ca-app-pub-6213881381017449/9232682521'); // Test ID, Replace with your-admob-unit-id
	await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
	await AdMobInterstitial.showAdAsync();
	}

export default function App() {


	return (
		<>
			<Image blurRadius={40} style={StyleSheet.absoluteFillObject}source={{uri:"https://cdn.dribbble.com/users/3281732/screenshots/7494265/media/59c910cbe462cb632449d5c464684555.jpg?compress=1&resize=800x600"}} />
			<StatusBar hidden />
			< AppContextProvider> 
			<NavigationContainer>
				<Stack.Navigator initialRouteName="HomePage" >
					<Stack.Screen name="HomePage" component={HomePage} options={{headerShown:false}} />
		{/*			<Stack.Screen name="LearnSelection" component={LearnSelectionWrapper} options={{headerShown:true}} />*/}
		<Stack.Screen name="Matching" component={MatchingWrapper} 
		options={({ navigation }) => ({ headerLeft: ()=> <HeaderBackButton onPress={()=> {displayInter() ;navigation.navigate('Gameselection')} } /> })} />
	<Stack.Screen name="Story" component={StoryWrapper} options={({ navigation }) => ({ headerLeft: ()=> <HeaderBackButton onPress={()=> {displayInter() ;navigation.navigate('StorySelection')} } /> })} />

	<Stack.Screen name="SelectFour" component={SelectFourWrapper} options={({ navigation }) => ({title:"Select From Four", headerLeft: ()=> <HeaderBackButton onPress={()=> {displayInter() ;navigation.navigate('Gameselection')} } /> })} />

	<Stack.Screen name="StorySelection" options={{title:"Story Selection"}} component={StorySelectionWrapper}  />
	<Stack.Screen name="Gameselection"  options={{title:"Game Selection"}} component={GameselectionWrapper}  /> 
	<Stack.Screen name="FlatList" component={FlatListScreen} 
		options={({ navigation }) => ({title:"Visual Learning", headerLeft: ()=> <HeaderBackButton onPress={()=> {displayInter() ;navigation.navigate('HomePage')} } /> })} />
			{/*			<Stack.Screen name="MostCommon" component={MostCommonWrapper} options={{headerShown:true}} />*/}
			<Stack.Screen name="Learn" component={LearnWrapper} 
			options={({ navigation }) => ({ title:"Images & Words",headerLeft: ()=> <HeaderBackButton onPress={()=> {displayInter() ;navigation.navigate('Gameselection')} } /> })} />
	</ Stack.Navigator>
</NavigationContainer>
</ AppContextProvider>
		</>
				);
			}

