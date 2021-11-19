import React, {useState, useEffect, useContext} from 'react';
import { GameselectionContext } from "./context/gameselection-context";
import { AppContext } from "../app-context/app-context.js";

import AppButton from "../shared_components/AppButton.js";

import { StyleSheet,Dimensions, Image ,Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

//import { Audio } from 'expo-av';

//import {
//	  AdMobBanner,
//	  AdMobInterstitial,
//	  PublisherBanner,
//	  AdMobRewarded,
//	  setTestDeviceIDAsync,
//	} from 'expo-ads-admob';

// async function m(){
	// await setTestDeviceIDAsync('EMULATOR');}
	//m();





//import RNPickerSelect from 'react-native-picker-select';

//const Dropdown = () => {
//	return (
//		<RNPickerSelect
//		onValueChange={(value) => console.log(value)}
//		items={[
//			{ label: 'Countries', value: 'countries' },
//			{ label: 'Verbs', value: 'verbs' },
//			{ label: 'Nouns', value: 'nouns' },
//			{ label: 'Animals', value: 'animals' },
//			]}
//		/>
//		);
//	};



export default function Gameselection(props){
	const [state, dispatch] = useContext(GameselectionContext);
	const [stateX, dispatchX] = useContext(AppContext);
	const navigation = useNavigation();
	const [selection, setCountry] = useState("all");
	const {width,height} = Dimensions.get("screen");

	const [sucsound, setsucsound] = React.useState();

	// useEffect(()=>{
	// 	async function loadsounda(){
	// 		const sucsound = new Audio.Sound();
	// 		try {
	// 			await sucsound.loadAsync(require('./y.mp3'));
	// 			//await fsound.playAsync();
	// 			setsucsound(sucsound);
	// 			} catch (error) {
	// 				console.log(error);
	// 				}
	// 		}
	// 	loadsounda();
	// 	},[])
	// async function playsucsound(){
	// 	await sucsound.setPositionAsync(0);
	// 	await	sucsound.playAsync();
	// 	}

	return (
		<>

		<View style={[ StyleSheet.absoluteFillObject , {backgroundColor:"slategray"}]} >
		{/*			<Image blurRadius={50} style={{width:width,height:height, resizeMode:"cover"}}source={require("../app-context/fox.jpg")} />*/}
		{/*		<Image blurRadius={0} style={{width:width,height:height, resizeMode:"cover"}}source={require("../../img6.jpeg")} />*/}
		</View>

			<View >


		{/*	<DropDownPicker
		labelStyle={{
			fontSize: 16,
				textAlign: 'center',
				color: '#000'
		}}
		items={[
			{label: 'All', value: 'all', icon: () => <Icon name="flag" size={16} color="#900" />, hidden: true},
			{label: 'Nouns', value: 'nouns', icon: () => <Icon name="flag" size={16} color="#900" />, hidden: true},
			{label: 'Verbs', value: 'verbs', icon: () => <Icon name="flag" size={16} color="#900" />},
			{label: 'Countries', value: 'countries', icon: () => <Icon name="flag" size={16} color="#900" />},
			{label: 'Animals', value: 'animals', icon: () => <Icon name="flag" size={16} color="#900" />},
			{label: 'Fruits and Vegetables', value: 'fruit_vegetables', icon: () => <Icon name="flag" size={16} color="#900" />},
			{label: 'Colors', value: 'colors', icon: () => <Icon name="flag" size={16} color="#900" />},
			{label: 'Objects', value: 'objects', icon: () => <Icon name="flag" size={16} color="#900" />},
			{label: 'Adjectives', value: 'adjectives', icon: () => <Icon name="flag" size={16} color="#900" />},
			]}
		defaultValue={selection}
		containerStyle={{height: 80}}
		style={{backgroundColor: '#fafafa',opacity:0.5, color:"black"}}
		itemStyle={{
			justifyContent: 'flex-start'
			}}
		dropDownStyle={{backgroundColor: '#fafafa'}}
		onChangeItem={item => {
			dispatchX({type:"SET_SELECTION",payload:item.value});
			setCountry(item.value);
		} }
		/>
*/}

	<View style={{marginVertical:20}}>
		<AppButton text="Matching" onPress={()=>       {navigation.navigate("Matching")}  }/>
		{/* <AppButton text="Matching" onPress={()=>       {playsucsound();navigation.navigate("Matching")}  }/> */}
		<AppButton text="Select From Four" onPress={()=>     {navigation.navigate("SelectFour")}}/>
		{/* <AppButton text="Select From Four" onPress={()=>     {playsucsound();navigation.navigate("SelectFour")}}/> */}
		<AppButton text="Images & Words" onPress={()=>{navigation.navigate("Learn")}     }/>
		{/* <AppButton text="Images & Words" onPress={()=>{playsucsound();navigation.navigate("Learn")}     }/> */}

	</View>

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


