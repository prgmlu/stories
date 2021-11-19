import React, {useState,useEffect, useContext} from 'react';
import { StorySelectionContext } from "./context/story-selection-context";


import { StyleSheet,BackHandler, Text, Image, View, ScrollView, TouchableOpacity} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import AppButton from '../shared_components/AppButton.js';
import { useNavigation } from '@react-navigation/native';



//import {
//	  AdMobBanner,
//	  AdMobInterstitial,
//	  PublisherBanner,
//	  AdMobRewarded,
//	  setTestDeviceIDAsync,
//	} from 'expo-ads-admob';

async function m(){
	await setTestDeviceIDAsync('EMULATOR');}
	//m();

export default function StorySelection(props){

async function displayInter(){
	// await setTestDeviceIDAsync('EMULATOR');
	await AdMobInterstitial.setAdUnitID('ca-app-pub-6213881381017449/9232682521'); // Test ID, Replace with your-admob-unit-id
	await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
	await AdMobInterstitial.showAdAsync();
	}

function handleBackButtonClick() {
		displayInter();
    navigation.goBack();
    return true;
  }

	//  useEffect(() => {
	//    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
	//    return () => {
	//      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
	//    };
	//  }, []);

		//	useEffect(() => {
		//		BackHandler.addEventListener("hardwareBackPress", ()=>{displayInter(); props.navigation.navigate("HomePage");});
		//		},[]);

	const [state, dispatch] = useContext(StorySelectionContext);
const navigation = useNavigation();

	return (
		<>

{/*<AdMobBanner
  bannerSize="fullBanner"
		adUnitID="ca-app-pub-6213881381017449/3480564918" // Test ID, Replace with your-admob-unit-id
  servePersonalizedAds // true or false
			onDidFailToReceiveAdWithError={()=>{}} />
			*/}

		<ScrollView style={{flex:1}}>
			<Card>
				<Card.Title>Choose a story</Card.Title>
				<AppButton text="HomePage" onPress={()=>navigation.navigate("HomePage")} />


				<Card.Divider/>
		{
			state.stories.map((u, i) => {
				return (

				<TouchableOpacity key={i} onPress={()=>props.navigation.navigate('Story',{key:i})}>
					<View key={i} style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>

						<Text style={styles.name}>{u.name}</Text>
						<Image
					style={{width:50, height:50}}
					resizeMode="cover"
					source={require('./ara.jpg')}
					/>


			</View>
			<Card.Divider/>
		</TouchableOpacity>

					);
				})
			}
		</Card>
	</ScrollView>
</>
		);
}


const styles = {
	name:{
		alignSelf:'flex-start', margin:12, color:'black',

		},
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign:'left'
		}
};
