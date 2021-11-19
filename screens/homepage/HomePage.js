import React,{useContext, useEffect, useState} from 'react';
import {Image,Button,Text, View, StyleSheet, FlatList, Dimensions} from 'react-native';
import AppButton from '../shared_components/AppButton.js';
import Icon from 'react-native-vector-icons/FontAwesome5';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { AppContext } from "../app-context/app-context";
import {  Overlay } from 'react-native-elements';
import MyGrid from "../../MyGrid";

import { List } from 'react-native-paper';
import SoundPlayer from 'react-native-sound-player';
// import {MyBanner} from '../../MyAds.js';

//import {
//	AdMobBanner,
//	AdMobInterstitial,
//	PublisherBanner,
//	AdMobRewarded,
//	setTestDeviceIDAsync,
//	} from 'expo-ads-admob';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { displayAds } from "../../DisplayAds.js";


//import { Audio } from 'expo-av';


const AboutOverlay = (props)=>{
const styles = {fontSize:16};
	return (
		<Overlay overlayStyle={{margin:10, borderRadius:20}} isVisible={props.visible} onBackdropPress={props.toggleVisible}>

			<View>
				<Text style={styles}>This is an app made for the love of the arabic language.</Text>
				<Text style={styles}>You can select the categories to practice specific words.</Text>
				<Text style={styles}>I plan on adding more words and categories in the future.</Text>
				<Text style={styles}>This is the effort of one person, please feel free to email me about anything, It would make me very happy: gmelkabany@gmail.com</Text>
				<Text style={styles}>When I'm faced with a decision regarding how to pronounce certain words, I use the Egyptian dialect.</Text>
				<Text style={styles}>Thanks everyone and I hope I made your learning a little bit easier and more fun.</Text>
				<Text style={styles}>Mostafa.</Text>
			</View>

		</Overlay>
		);
	}
export default function HomePage({navigation}){
	//AdMobRewarded.addEventListener("rewardedVideoDidRewardUser",()=>{dispatch({type:"CHANGE_HEARTS",payload:0})})

	async function displayInter(){
		if (!displayAds) return;
		//await setTestDeviceIDAsync('EMULATOR');
		await AdMobInterstitial.setAdUnitID('ca-app-pub-6213881381017449/9232682521'); // Test ID, Replace with your-admob-unit-id
		await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
		await AdMobInterstitial.showAdAsync();
		dispatch({type:"CHANGE_HEARTS",payload:1});
		}



	const [sound, setsound] = React.useState();
	const [fsound, setfsound] = React.useState();

	const [expanded, setExpanded] = React.useState(false);
	const [aboutVisible, setAboutVisible] = React.useState(false);


	async function playAppSound() {
		if (SoundPlayer){
			console.log(SoundPlayer);

			SoundPlayer.playSoundFile('y','mp3');
			return;
			console.log("playing sound");
			await sound.setPositionAsync(0);
			await sound.playAsync(); }
		}


	async function getItem(){
		return await AsyncStorage.getItem('hearts');
		}

	useEffect(()=>{
		getItem().then((value)=>{
			if (value !='"NaN"'){
				if (value == 0) dispatch({type:"SET_HEARTS",payload:Number(value)});
				if (value) dispatch({type:"SET_HEARTS",payload:Number(value)});

				}
			})
			},[]);


	const [state, dispatch] = useContext(AppContext);
	//const heart = <Icon name="heart" size={20} color="#900" style={{margin:2}} />; // Defaults to regular

	const heart = <FontAwesome5 name="heart" size={20} color="#900" style={{margin:2}} />; // Defaults to regular
	//const plus = <Icon onPress={()=>dispatch({type:"CHANGE_HEARTS",payload:5})}name="plus" size={30} style={{margin:2}} color="gray" />; // Defaults to regular
	const {width, height} = Dimensions.get("screen");



	const Header = ()=>{
		return(
			<>
				<List.Accordion id={1} key={2}
			expanded={expanded}
			onPress={()=>{setExpanded(!expanded)}}
			titleStyle={{color:"white", fontSize:20, fontWeight:"bold", opacity:.9}}
			title={"Choose The Categories"}
			style={{
				borderRadius:10,
					border:"10px",
					borderWidth:2
				}} >

				<Overlay overlayStyle={{width:"95%", height:"40%", borderRadius:20}} isVisible={expanded} onBackdropPress={()=>setExpanded(!expanded)}  >
					<MyGrid />
				</Overlay>


			</List.Accordion>



			<View	style={{justifyContent:"center",backgroundColor:"white",margin:20,borderRadius:20,padding:10,alignSelf:"flex-end", flexDirection:"row", alignItems:"center",alignText:"center", }}>
				<Text style={{fontSize:20}}>You have </Text>
				<Text style={{fontSize:20}}>{state.hearts} </Text>
			{heart}
			<Text style={{fontSize:20}}> </Text>
		</View>

	</>
			)
		}


	return(
		<View style={{flex:1, justifyContent:"center"}}>
			<AboutOverlay visible={aboutVisible} toggleVisible={()=>{setAboutVisible(!aboutVisible)}} />
			{/* <MyBanner /> */}


			<View style={StyleSheet.absoluteFillObject}>
		{/*				<Image blurRadius={50} style={{height:height, width:width, resizeMode:"cover"}}source={require("../../img.jpg")} />*/}
		<Image blurRadius={0} style={{height:height, width:width, resizeMode:"cover"}}source={require("../../img.jpg")} />
	</View>

	<View style={{height:"30%",justifyContent:"space-evenly"}}>
		<Header /> 
		<View></View>
	</View>

		{/*	<View style={{justifyContent:'center',alignItems:'center', flex:1}}>*/}
		<View style={{justifyContent:'center',alignItems:'center'}}>
			<View>
		{/*			<AppButton text="Matching" onPress={()=>navigation.navigate("Matching")} />*/}
		<AppButton text="Read a Story" onPress={()=>{playAppSound(); navigation.navigate('StorySelection');}} />
		{/*			<AppButton text="Most Common Words" onPress={()=>navigation.navigate('MostCommon')} />*/}
		<AppButton text="Select a Game" onPress={()=> { playAppSound();navigation.navigate('Gameselection') } } />
		{/*		<AppButton text="Games" onPress={()=>playAppSound()} />*/}
		{/*		<AppButton text="Games" onPress={()=>navigation.navigate("Gameselection")} />*/}
		<AppButton text="Visual Learning" onPress={()=> { playAppSound(); navigation.navigate("FlatList") } } />
		<AppButton text="Get more hearts!" onPress={()=>displayInter()} />
		<AppButton text="About Us." onPress={()=>{setAboutVisible(true)}} />
		{/*		<AppButton text="Get 500 hearts FOR BOO ONLY" onPress={()=>{dispatch({type:"CHANGE_HEARTS",payload:500})}} />*/}
		{/*			<AppButton text="Learn" onPress={()=>navigation.navigate('Learn')} />*/}
	</View>

</View>

<View style={{marginTop:'auto'}}>

	{/*<AdMobBanner
		bannerSize="fullBanner"
		adUnitID="ca-app-pub-6213881381017449/3480564918" // Test ID, Replace with your-admob-unit-id
		servePersonalizedAds // true or false
		onDidFailToReceiveAdWithError={()=>{}} />
		*/}

</View>


</View>
	);

};
